import { emptyMatch, Match } from '@/models/match.model'
import { RankedTier } from '@/models/rankedTier.model'
import { Season } from '@/models/season.model'
import MatchService from '@/services/match.service'
import useRankedTiers from '@hooks/useRankedTier'
import { newDate } from '@utils/logic'
import { showError } from '@utils/modules/HandleErrors'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useMatches } from './useMatches'
import useSeasons from './useSeasons'

export const useMatch = () => {
  const [currentMatch, setCurrentMatch] = useState<Match>()
  const [isLoading, setIsloading] = useState(true)
  const { rankedTiers, loadRankedTiers, getRankedTiers } = useRankedTiers()
  const { seasons, loadSeasons, getSeasons } = useSeasons()
  const { matches, loadMatches, getMatches } = useMatches()
  const createMatch = async (newMatch: Match) => {
    try {
      const result = await MatchService.createOne(newMatch)
      console.log(result.data)
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
  const loadFirstCurrentMatch = (
    season: Season,
    rankedTier: RankedTier,
    matches: Match[],
  ) => {
    const date = newDate()
    const foundMatch = MatchService.findOneByDate(matches, date)
    if (foundMatch) setCurrentMatch(foundMatch)
    else setCurrentMatch(emptyMatch(date, season, rankedTier))
  }

  const loadData = async () => {
    const newMatches = await getMatches()
    const newRankedTiers = await getRankedTiers()
    const newSeasons = await getSeasons()

    loadMatches(newMatches)
    loadRankedTiers(newRankedTiers)
    loadSeasons(newSeasons)
    loadFirstCurrentMatch(newSeasons[0], rankedTiers[0], newMatches)
    setIsloading(false)
  }
  useEffect(() => {
    loadData()
  }, [])

  // useEffect(() => {
  //   if (seasons.length != 0 && rankedTiers.length != 0) {
  //     console.log('again')
  //     getMatchByDate(newDate())
  //     setIsloading(false)
  //   }
  // }, [matches, seasons, rankedTiers])

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
    rankedTiers,
    seasons,
    isLoading,
  }
}
