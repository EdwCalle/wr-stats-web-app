import { TierSeason, TierType } from '../utils/enums/rankedTier.enum'

export interface rankedTier {
  _id: string
  tierName: string
  tierSeason: TierSeason
  tierType: TierType
  minMarks: number
  maxMarks: number
}
