import { Season } from '@/models/season.model'
import { SeasonApi } from '@utils/interfaces/api.interface'
import api from './axios.service'
const SEASONS_URL = `seasons`

export const getSeasons = async () => {
  const response = await api.get(SEASONS_URL)
  const result: SeasonApi[] = response.data
  return result
}
export const apiToSeasons = (seasonsApi: SeasonApi[]) => {
  const seasons: Season[] = seasonsApi.map((seasonApi) => ({
    ...seasonApi,
    startDate: new Date(seasonApi.startDate),
    finishDate: seasonApi.finishDate ? new Date(seasonApi.finishDate) : null,
  }))
  return seasons
}
