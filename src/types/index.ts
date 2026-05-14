export interface Macro {
  kcal: number
  protein: number
  carbs: number
  fat: number
}

export interface ComboItem {
  id: string
  name: string
  restaurant: string
  description?: string
  macros: Macro
  price?: number
  currency?: string
}

export interface Restaurant {
  id: string
  name: string
  logo?: string
  combos: ComboItem[]
}

export interface DailyEntry {
  id: string
  comboId: string
  restaurantName: string
  comboName: string
  macros: Macro
  timestamp: Date
  quantity: number
}
