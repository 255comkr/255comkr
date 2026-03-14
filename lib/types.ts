export interface Product {
  name: string
  price: number
  url: string
}

export interface Category {
  icon: string
  color: string
  url: string
  products: Product[]
  count: number
  min_price: number
  max_price: number
  avg_price: number
}

export interface PriceData {
  last_updated: string | null
  categories: Record<string, Category>
}
