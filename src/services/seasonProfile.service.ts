import { SeasonProfile } from '@/models/seasonProfile.model'
import { SeasonProfileApi } from '@utils/interfaces/api.interface'
import api from './axios.service'
import { SeasonService } from './season.service'
const SEASONS_URL = `season-profile`

export class SeasonProfileService {
  static findAll = async () => {
    return await api.get(SEASONS_URL)
  }

  static toSeasonProfile = (
    seasonProfileApi: SeasonProfileApi,
  ): SeasonProfile => {
    try {
      return {
        ...seasonProfileApi,
        season: SeasonService.toSeason(seasonProfileApi.seasonID),
      }
    } catch (error) {
      throw Error(`Error on cast SeasonProfileApi:, ${error}`)
    }
  }
}
