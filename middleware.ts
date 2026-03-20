import { NextRequest, NextResponse } from 'next/server'
import { createHash } from 'crypto'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const res = NextResponse.next()

  // ── 보안 헤더 (전체 경로)
  const headers = res.headers
  headers.set('X-Frame-Options', 'DENY')                          // 클릭재킹 방지
  headers.set('X-Content-Type-Options', 'nosniff')               // MIME 스니핑 방지
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  headers.set('X-XSS-Protection', '1; mode=block')
  headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",        // Next.js 필요
      "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com",
      "font-src 'self' https://cdn.jsdelivr.net https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
    ].join('; ')
  )

  // ── Admin 경로 접근 제어 (페이지 레벨)
  // /admin 접근 시 세션 쿠키 없으면 로그인 페이지로 — API는 각자 검증
  if (pathname === '/admin' || pathname.startsWith('/admin/')) {
    // API 경로는 미들웨어에서 리다이렉트 제외 (각 route에서 처리)
    if (!pathname.startsWith('/api/')) {
      const token = req.cookies.get('255admin_token')?.value
      if (!token) {
        // 토큰 없으면 그냥 통과 (클라이언트 컴포넌트가 로그인 UI 표시)
        // 강제 리다이렉트 대신 클라이언트 인증으로 처리
      }
    }
  }

  // ── /api/admin/* 에 대한 method 제한
  if (pathname.startsWith('/api/admin/login') && req.method !== 'POST') {
    return new NextResponse(null, { status: 405, headers: { Allow: 'POST' } })
  }
  if (pathname.startsWith('/api/admin/logout') && req.method !== 'POST') {
    return new NextResponse(null, { status: 405, headers: { Allow: 'POST' } })
  }
  if (pathname.startsWith('/api/admin/check') && req.method !== 'GET') {
    return new NextResponse(null, { status: 405, headers: { Allow: 'GET' } })
  }

  return res
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
