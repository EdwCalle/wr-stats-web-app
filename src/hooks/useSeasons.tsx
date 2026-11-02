import { Season } from '@/models/season.model'
import { SeasonService } from '@/services/season.service'
import { Option } from '@components/Select/Select'
import { useState } from 'react'
import { toast } from 'react-toastify'

const useSeasons = () => {
  const [seasons, setSeasons] = useState<Season[]>([])
  const loadSeasons = (items: Season[]) => {
    setSeasons([...items])
  }
  const getSeasons = async () => {
    try {
      const res = await SeasonService.findAll()
      return SeasonService.toSeasons(res.data)
    } catch (error) {
      toast.error(`Error fetching seasons: ${error}`)
      return []
    }
  }
  const autoLoadSeasons = async () => {
    const items = await getSeasons()
    setSeasons([...items])
  }

  const toSeasonsOptions = (): Option[] => {
    return seasons.map((item) => ({
      id: item._id,
      value: item.seasonName,
    }))
  }
  return { seasons, getSeasons, loadSeasons, autoLoadSeasons, toSeasonsOptions }
}
export default useSeasons
