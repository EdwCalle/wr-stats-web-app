import { emptyMatch, Match } from '@/models/match.model'
import MatchService from '@/services/match.service'
import useRankedTiers from '@hooks/useRankedTier'
import { newDate } from '@utils/logic'
import { showError } from '@utils/modules/HandleErrors'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import useSeasons from './useSeasons'

export const useMatch = () => {
  const [currentMatch, setCurrentMatch] = useState<Match>()
  const [isLoading, setIsloading] = useState(true)
  const { rankedTiers, loadRankedTiers } = useRankedTiers()
  const { seasons, loadSeasons } = useSeasons()
  const [matches, setMatches] = useState<Match[]>([])
  const createMatch = async (newMatch: Match) => {
    try {
      const result = await MatchService.createOne(newMatch)
      toast(`Created ok.  ${result.data}`)
    } catch (error) {
      showError(error, 'Error on create match', 'modal')
    }
  }
  const getMatchByDate = (date: Date) => {
    // console.log('first date', matches[0].date.toISOString())
    console.log('getMatchByDate:', date.toISOString())
    const foundMatch = MatchService.findOneByDate(matches, date)
    if (foundMatch) setCurrentMatch(foundMatch)
    else setCurrentMatch(emptyMatch(date, seasons[0], rankedTiers[0]))
  }
  const getMatches = async () => {
    const res = await MatchService.findAll()
    const newMatches = MatchService.toMatches(res.data)
    setMatches([...newMatches])
  }
  const loadData = async () => {
    await Promise.all([loadRankedTiers(), getMatches(), loadSeasons()])
  }
  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    if (seasons.length != 0 && rankedTiers.length != 0) {
      getMatchByDate(newDate())
      setIsloading(false)
    }
  }, [matches, seasons, rankedTiers])

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
