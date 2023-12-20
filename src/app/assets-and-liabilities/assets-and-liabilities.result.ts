
export interface AssetsAndLiabilities {
  liquidityAssets: Asset
  liquidityLiabilities: Asset
  securityAssets: Asset
  securityLiabilities: Asset
}

export interface Asset {
  entries: AssetEntry[]
  background: string
}

export interface AssetEntry {
  asset: string
  asset2: string
  amount: number
  currency: string
}
