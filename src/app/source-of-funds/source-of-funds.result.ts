export interface SourceOfFundsResult {
  sourceOfFunds: SourceOfFunds
}

export interface SourceOfFunds {
  entries: SourceOfFundsEntry[]
  background: string
}

export interface SourceOfFundsEntry {
  type: string
  amount: number
  currency: string
  year: string
  institution: string
}
