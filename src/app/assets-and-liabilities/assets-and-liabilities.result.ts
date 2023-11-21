
export interface AssetsAndLiabilities {
  liquidity: Liquidity
}

export interface Liquidity {
  liquidity: LiquidityEntry[]
  background: string
}

export interface LiquidityEntry {
  asset: string
  amount: number
  currency: string
}
