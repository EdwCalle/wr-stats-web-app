import { Season } from '@/models/season.model'
import { SeasonService } from '@/services/season.service'
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
      toast.error(`Error on get seasons: ${error}`)
      return []
    }
  }

  return { seasons, getSeasons, loadSeasons }
}
export default useSeasons
