import { Season } from '@/models/season.model'
import { SeasonService } from '@/services/season.service'
import { useEffect, useState } from 'react'

const useSeasons = () => {
  const [seasons, setSeasons] = useState<Season[]>([])
  const loadSeasons = async () => {
    const res = await SeasonService.findAll()
    const newSeasons = SeasonService.toSeasons(res.data)
    setSeasons([...newSeasons])
  }
  useEffect(() => {
    loadSeasons()
  }, [])
  return { seasons, loadSeasons }
}
export default useSeasons
