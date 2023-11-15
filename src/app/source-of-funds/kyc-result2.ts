export interface SourceOfFundsKycResult {
  plannedInitialInvestmentChf: number;
  percentageOfNewWorth: number;
  longTermPlannedAssetsChf: number;
  assetIncomingsOnBehalf: AssetIncomingType[];
  incomingInstitutionBanks: InstitutionBank[];
  originFundsFromBusinessActivitiesChf: number;
  originFundsFromDepositChf: number;
  originFundsFromSaleOfInterestsChf: number;
  originFundsFromSaleOfRealEstateChf: number;
  originFundsFromMiscellaneous: MiscellaneousFunds;
  documentForProofOfFundsAvailable: boolean;
  identityOfBeneficialOwnerHasBeenVerified: boolean;
}

export type AssetIncomingType = 'Transfer' | 'InCash' | 'TransferOfSecurities' | 'DeliveryOfSecuritiesPreciousMetal';

export interface InstitutionBank {
  institutionBankName: string;
  placeOfTheInstitutionBank: string;
  countryIsoCode: string; // oder ein Enum, wenn Sie eine feste Liste von Ländercodes haben
}

export interface MiscellaneousFunds {
  description: string;
  amountChf: number;
}
