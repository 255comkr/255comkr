import { NextRequest, NextResponse } from 'next/server'
import { verifySession } from '@/lib/auth'

export async function GET(req: NextRequest) {
  return NextResponse.json({ ok: verifySession(req) })
}
