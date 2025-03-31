import { Season } from '@/models/season.model'
import { SeasonApi } from '@utils/interfaces/api.interface'
import api from './axios.service'
const SEASONS_URL = `seasons`
export class SeasonService {
  static findAll = async () => {
    return await api.get(SEASONS_URL)
  }
  static toSeasons = (seasonsApi: SeasonApi[]): Season[] => {
    return seasonsApi.map((seasonApi) => this.toSeason(seasonApi))
  }
  static toSeason = (seasonApi: SeasonApi): Season => {
    try {
      return {
        _id: seasonApi._id,
        seasonName: seasonApi.seasonName,
        startDate: new Date(seasonApi.startDate),
        finishDate: seasonApi.finishDate
          ? new Date(seasonApi.finishDate)
          : null,
      }
    } catch (error) {
      throw Error(`Error on cast seasonApi:, ${error}`)
    }
  }
}
