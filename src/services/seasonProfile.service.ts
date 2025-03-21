import { SeasonProfile } from '@/models/seasonProfile.model'
import { SeasonProfileApi } from '@utils/interfaces/api.interface'
import api from './axios.service'
const SEASONS_URL = `season-profile`

export const getSeasonProfile = async () => {
  const response = await api.get(SEASONS_URL)
  const result: SeasonProfileApi[] = response.data
  return result
}
export const apiToSeasonProfileApi = (seasonProfileApi: SeasonProfileApi[]) => {
  const seasonsProfile: SeasonProfile[] = seasonProfileApi.map(
    (seasonProfileApi) => ({
      ...seasonProfileApi,
      season: {
        _id: seasonProfileApi.seasonID._id,
        seasonName: seasonProfileApi.seasonID.seasonName,
        startDate: new Date(seasonProfileApi.seasonID.startDate),
        finishDate: seasonProfileApi.seasonID.finishDate
          ? new Date(seasonProfileApi.seasonID.finishDate)
          : null,
      },
    }),
  )
  return seasonsProfile
}
