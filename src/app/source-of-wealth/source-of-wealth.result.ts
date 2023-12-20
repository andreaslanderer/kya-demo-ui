export interface SourceOfWealthResult {
  sourceOfWealth: SourceOfWealth
}

export interface SourceOfWealth {
  entries: SourceOfWealthEntry[]
  background: string
}

export interface SourceOfWealthEntry {
  type: string
  amount: number
  currency: string
}
