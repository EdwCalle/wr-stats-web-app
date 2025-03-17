import { SeasonApi } from '@utils/interfaces/api.interface'
import api from './axios.service'
const SEASONS_URL = `seasons`

export const getSeasons = async () => {
  const response = await api.get(SEASONS_URL)
  const result: SeasonApi[] = response.data
  return result
}
