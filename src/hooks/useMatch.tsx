import { Match, newMatch } from '@/models/match.model'
import MatchService from '@/services/match.service'
import useRankedTiers from '@hooks/useRankedTier'
// import { newDate } from '@utils/logic'
import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import useSeasons from './useSeasons'

export const useMatch = () => {
  const [currentMatch, setCurrentMatch] = useState<Match>(newMatch)
  const [isLoading, setIsloading] = useState(true)
  const { rankedTiers, loadRankedTiers } = useRankedTiers()
  const { seasons, loadSeasons } = useSeasons()
  const [matches, setMatches] = useState<Match[]>([])
  const createMatch = async (newMatch: Match) => {
    try {
      const result = await MatchService.createOne(newMatch)
      toast(`Created ok.  ${result.data}`)
    } catch (error) {
      console.log('error:', error)
      if (error instanceof AxiosError) {
        const copy = error.response?.data
        if (copy)
          toast.error(`error on create match. ${copy.message}`, {
            containerId: 'modal',
          })
        else
          toast.error(`error on create match. `, {
            containerId: 'modal',
          })
      } else
        toast.error(`error on create match. `, {
          containerId: 'modal',
        })
    }
    setCurrentMatch(newMatch)
  }
  const getMatchByDate = (date: Date) => {
    // console.log('first date', matches[0].date.toISOString())
    console.log('getMatchByDate:', date.toISOString())
    const foundMatch = MatchService.findOneByDate(matches, date)
    if (foundMatch) setCurrentMatch(foundMatch)
    else setCurrentMatch({ ...newMatch, date })
  }
  const getMatches = async () => {
    const res = await MatchService.findAll()
    const newMatches = MatchService.toMatches(res.data)
    setMatches([...newMatches])
  }
  const loadData = async () => {
    await Promise.all([loadRankedTiers(), getMatches(), loadSeasons()])
    setIsloading(false)
  }
  useEffect(() => {
    loadData()
  }, [])

  // console.log(
  //   'i render:',
  //   isLoading,
  //   currentMatch,
  //   matches.length,
  //   rankedTiers.length,
  // )
  console.log('render: useMatch')
  return {
    currentMatch,
    createMatch,
    getMatchByDate,
    matches,
    isLoading,
    rankedTiers,
    seasons,
  }
}
