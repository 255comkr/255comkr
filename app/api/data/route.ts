import { NextResponse } from 'next/server'
import { loadPriceData } from '@/lib/data'

export const dynamic = 'force-dynamic'

export async function GET() {
  const data = loadPriceData()
  if (!data) {
    return NextResponse.json({ error: 'no_data' }, { status: 404 })
  }
  return NextResponse.json(data, {
    headers: { 'Cache-Control': 'no-store' },
  })
}
