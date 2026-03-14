import path from 'path'
import fs from 'fs'
import type { PriceData } from './types'

const DATA_PATH = path.join(process.cwd(), 'data', 'products.json')

export function loadPriceData(): PriceData | null {
  try {
    const raw = fs.readFileSync(DATA_PATH, 'utf-8')
    return JSON.parse(raw) as PriceData
  } catch {
    return null
  }
}
