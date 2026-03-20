import { SESSIONS } from '@/lib/sessions'
import { NextRequest, NextResponse } from 'next/server'
import { createHash, randomBytes, timingSafeEqual } from 'crypto'

// ── 인메모리 Rate Limiter
const ATTEMPTS = new Map<string, { count: number; resetAt: number }>()
const MAX_ATTEMPTS = 5
const WINDOW_MS    = 15 * 60 * 1000  // 15분
const LOCKOUT_MS   = 30 * 60 * 1000  // 잠금 30분

function getRateLimit(ip: string) {
  const now = Date.now()
  const e   = ATTEMPTS.get(ip)
  if (!e || now > e.resetAt) {
    ATTEMPTS.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return { allowed: true, remaining: MAX_ATTEMPTS - 1 }
  }
  if (e.count >= MAX_ATTEMPTS) {
    e.resetAt = now + LOCKOUT_MS
    return { allowed: false, remaining: 0 }
  }
  e.count++
  return { allowed: true, remaining: MAX_ATTEMPTS - e.count }
}

function clearLimit(ip: string) { ATTEMPTS.delete(ip) }

// ── 타이밍 공격 방지 비교
function safeCompare(a: string, b: string): boolean {
  const ha = Buffer.from(createHash('sha256').update(a).digest('hex'))
  const hb = Buffer.from(createHash('sha256').update(b).digest('hex'))
  return ha.length === hb.length && timingSafeEqual(ha, hb)
}

// ── 세션 저장 (해시 → 만료 ms)

export async function POST(req: NextRequest) {
  // Content-Type 검증
  if (!(req.headers.get('content-type') ?? '').includes('application/json'))
    return NextResponse.json({ ok: false }, { status: 415 })

  // body 크기 제한 (1KB)
  if (Number(req.headers.get('content-length') ?? 0) > 1024)
    return NextResponse.json({ ok: false }, { status: 413 })

  // IP
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ?? 'unknown'

  // Rate limit
  const rl = getRateLimit(ip)
  if (!rl.allowed) {
    await new Promise(r => setTimeout(r, 1000))
    return NextResponse.json(
      { ok: false, error: 'too_many_attempts' },
      { status: 429, headers: { 'Retry-After': '1800' } }
    )
  }

  // body 파싱
  let body: { password?: unknown }
  try { body = await req.json() }
  catch { return NextResponse.json({ ok: false }, { status: 400 }) }

  const pw = typeof body.password === 'string' ? body.password : ''
  if (!pw || pw.length > 200) {
    await new Promise(r => setTimeout(r, 800))
    return NextResponse.json({ ok: false }, { status: 401 })
  }

  const ADMIN_PW = process.env.ADMIN_PASSWORD ?? '255com2025'
  const valid    = safeCompare(pw, ADMIN_PW)

  if (!valid) {
    await new Promise(r => setTimeout(r, 800))
    return NextResponse.json({ ok: false, remaining: rl.remaining }, { status: 401 })
  }

  clearLimit(ip)

  // 128bit 랜덤 세션 토큰 발급
  const token     = randomBytes(16).toString('hex')
  const tokenHash = createHash('sha256').update(token).digest('hex')
  SESSIONS.set(tokenHash, Date.now() + 8 * 60 * 60 * 1000)

  const res = NextResponse.json({ ok: true })
  res.cookies.set('255admin_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 8,
    path: '/admin',
  })
  return res
}
