import { NextRequest } from 'next/server'
import { createHash } from 'crypto'
import { SESSIONS } from '@/app/api/admin/login/route'

export function verifySession(req: NextRequest): boolean {
  const token = req.cookies.get('255admin_token')?.value
  if (!token) return false

  const hash = createHash('sha256').update(token).digest('hex')
  const exp  = SESSIONS.get(hash)
  if (!exp) return false

  // 만료 체크
  if (Date.now() > exp) {
    SESSIONS.delete(hash)
    return false
  }

  return true
}
