import { RankedTier } from '@/models/rankedTier.model'
import { TierSeason, TierType } from '@utils/enums/rankedTier.enum'
import { RankedTierApi } from '@utils/interfaces/api.interface'
import axios from './axios.service'
const RANKED_TIERS_API = `ranked-tier`
export class RankedTierService {
  static findAll = async () => {
    return await axios.get(RANKED_TIERS_API)
  }
  static toRankedTiers = (rankedTiersApi: RankedTierApi[]): RankedTier[] => {
    return rankedTiersApi.map((rankedTier) => this.toRankedTier(rankedTier))
  }
  static toRankedTier = (rankedTierApi: RankedTierApi): RankedTier => {
    try {
      return {
        _id: rankedTierApi._id,
        minMarks: rankedTierApi.minMarks,
        maxMarks: rankedTierApi.maxMarks,
        tierName: rankedTierApi.tierName,
        tierSeason: rankedTierApi.tierSeason as TierSeason,
        tierType: rankedTierApi.tierType as TierType,
      }
    } catch (error) {
      throw Error(`Error casting RankedTierApi:${error}`)
    }
  }
}
