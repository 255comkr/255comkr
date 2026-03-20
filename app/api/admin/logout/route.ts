import { NextRequest, NextResponse } from 'next/server'
import { createHash } from 'crypto'
import { SESSIONS } from '@/app/api/admin/login/route'

export async function POST(req: NextRequest) {
  // 세션 서버에서도 삭제
  const token = req.cookies.get('255admin_token')?.value
  if (token) {
    const hash = createHash('sha256').update(token).digest('hex')
    SESSIONS.delete(hash)
  }
  const res = NextResponse.json({ ok: true })
  res.cookies.set('255admin_token', '', { maxAge: 0, path: '/admin' })
  return res
}
