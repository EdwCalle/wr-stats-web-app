import { RankedTierApi } from '@utils/interfaces/api.interface'
import { TierSeason, TierType } from '../utils/enums/rankedTier.enum'

export interface RankedTier {
  _id: string
  tierName: string
  tierSeason: TierSeason
  tierType: TierType
  minMarks: number
  maxMarks: number
}

export function toRankedTier(RankedTierApi: RankedTierApi): RankedTier {
  try {
    return {
      ...RankedTierApi,
      tierSeason: RankedTierApi.tierSeason as TierSeason,
      tierType: RankedTierApi.tierType as TierType,
    }
  } catch (error) {
    console.log(error)
    throw Error('Api cast error in RankedTier!!!!')
  }
}
