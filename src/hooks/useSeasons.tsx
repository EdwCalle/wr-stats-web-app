import { Season } from '@/models/season.model'
import { apiToSeasons, getSeasons } from '@/services/season.service'
import { SeasonApi } from '@utils/interfaces/api.interface'
import { useEffect, useState } from 'react'

const useSeasons = () => {
  const [seasons, setSeasons] = useState<Season[]>()
  const loadSeasons = async () => {
    const seasonsApi: SeasonApi[] = await getSeasons()
    const newSeasons = apiToSeasons(seasonsApi)
    setSeasons([...newSeasons])
  }
  useEffect(() => {
    loadSeasons()
  }, [])
  return { seasons }
}
export default useSeasons
