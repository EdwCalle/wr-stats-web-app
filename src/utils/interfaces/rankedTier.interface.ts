import { TierSeason, TierType } from '../enums/rankedTier.enum'

export interface rankedTier {
  id: string
  tierName: string
  tierSeason: TierSeason
  tierType: TierType
  minMarks: number
  maxMarks: number
}
