import { emptyMatch, Match } from '@/models/match.model'
import { RankedTier } from '@/models/rankedTier.model'
import { Season } from '@/models/season.model'
import MatchService from '@/services/match.service'
import useRankedTiers from '@hooks/useRankedTier'
import { newDate } from '@utils/modules/TimeWR'
import { useEffect, useState } from 'react'
import { useMatches } from './useMatches'
import useSeasons from './useSeasons'

export const useMatch = () => {
  const [currentMatch, setCurrentMatch] = useState<Match>()
  const [isLoading, setIsloading] = useState(true)
  const { rankedTiers, loadRankedTiers, getRankedTiers } = useRankedTiers()
  const { seasons, loadSeasons, getSeasons } = useSeasons()
  const { matches, loadMatches, getMatches } = useMatches()

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
    date: Date,
  ) => {
    const foundMatch = MatchService.findOneByDate(matches, date)
    if (foundMatch) setCurrentMatch(foundMatch)
    else setCurrentMatch(emptyMatch(date, season, rankedTier))
  }

  const loadData = async (date: Date) => {
    const newMatches = await getMatches()
    const newRankedTiers = await getRankedTiers()
    const newSeasons = await getSeasons()

    loadMatches(newMatches)
    loadRankedTiers(newRankedTiers)
    loadSeasons(newSeasons)
    loadFirstCurrentMatch(newSeasons[0], newRankedTiers[0], newMatches, date)
    setIsloading(false)
  }
  useEffect(() => {
    loadData(newDate())
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
    getMatchByDate,
    matches,
    rankedTiers,
    seasons,
    loadData,
    isLoading,
  }
}
