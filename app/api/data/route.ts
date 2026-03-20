import { NextRequest, NextResponse } from 'next/server'
import { loadPriceData } from '@/lib/data'
import { verifySession } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  if (!verifySession(req)) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }
  const data = loadPriceData()
  if (!data) {
    return NextResponse.json({ error: 'no_data' }, { status: 404 })
  }
  return NextResponse.json(data, {
    headers: { 'Cache-Control': 'no-store' },
  })
}
