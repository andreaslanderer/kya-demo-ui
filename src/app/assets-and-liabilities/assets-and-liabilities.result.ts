
export interface AssetsAndLiabilities {
  liquidity: Liquidity
}

export interface Liquidity {
  assets: LiquidAsset
  liabilities: LiquidLiability
}

export interface  LiquidAsset {
  assetEntries: LiquidityEntry[]
  background: string
}

export interface  LiquidLiability {
  liabilityEntries: LiquidityEntry[]
  background: string
}

export interface LiquidityEntry {
  asset: string
  amount: number
  currency: string
}
