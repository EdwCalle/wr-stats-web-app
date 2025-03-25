import { RankedTierApi } from '@utils/interfaces/api.interface'
import api from './axios.service'
const RANKED_TIERS_API = `ranked-tier`
export class RankedTierService {
  static findAll = async () => {
    const response = await api.get(RANKED_TIERS_API)
    const result: RankedTierApi[] = response.data
    return result
  }
}
