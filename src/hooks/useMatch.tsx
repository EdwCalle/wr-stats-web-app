import { Match, newMatch } from '@/models/match.model'
import MatchService from '@/services/match.service'
import useRankedTiers from '@hooks/useRankedTier'
// import { newDate } from '@utils/logic'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const useMatch = () => {
  const [currentMatch, setCurrentMatch] = useState<Match>(newMatch)
  const [isLoading, setIsloading] = useState(true)
  const { rankedTiers, loadRankedTiers } = useRankedTiers()
  const [matches, setMatches] = useState<Match[]>([])
  const createMatch = async (newMatch: Match) => {
    try {
      const result = await MatchService.createOne(newMatch)
      toast(`Created ok.  ${result}`)
    } catch (error) {
      console.log('error')
      toast.error(`error on create match.  ${error}`)
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
    await Promise.all([loadRankedTiers(), getMatches()])
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
  }
}
