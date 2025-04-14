import { Match, QueryMatchesDto } from '@/models/match.model'
import MatchService from '@/services/match.service'
import { DataFrame } from '@components/Chart/Chart'
import { formatDate } from '@utils/modules/TimeWR'
import { useState } from 'react'

export const useMatches = () => {
  const [matches, setMatches] = useState<Match[]>([])

  const getMatches = async (query?: QueryMatchesDto) => {
    const res = await MatchService.findAll(query)
    return MatchService.toMatches(res.data)
  }

  const loadMatches = async (items: Match[]) => {
    setMatches([...items])
  }

  const autoLoadMatches = async () => {
    const items = await getMatches()
    setMatches([...items])
  }

  const toMachPointXY = (match: Match) => {
    return {
      time: formatDate(match.date.toISOString()),
      value: match.stats?.acumDiff ?? 0,
    }
  }

  const getMatchesBySeason = (seasonProfileID: string) => {
    if (seasonProfileID === 'all') return matches
    return matches.filter(
      (match) => match.seasonProfile._id === seasonProfileID,
    )
  }

  const getMatchesbyCompare = (seasonProfileIDs: string[]): DataFrame[] => {
    if (seasonProfileIDs.length == 0)
      return [getMatchesBySeason('all').map(toMachPointXY)]
    if (seasonProfileIDs.length == 1)
      return [getMatchesBySeason(seasonProfileIDs[0]).map(toMachPointXY)]

    return seasonProfileIDs.map((seasonProfileID) => {
      const newMatches = getMatchesBySeason(seasonProfileID)

      const data = newMatches.map((item, index) => {
        // const date = new Date(index)
        // date.setDate(date.getDate() + index)
        // const time = formatDate(date.toISOString())
        return {
          time: index,
          value: item.stats?.acumDiff ?? 0,
        }
      })
      return data
    })
  }

  const getMatchesTable = () => {
    return MatchService.toTable(
      matches.sort((a, b) => b.date.getTime() - a.date.getTime()),
    )
  }

  return {
    matches,
    getMatches,
    loadMatches,
    autoLoadMatches,
    getMatchesbyCompare,
    getMatchesBySeason,
    getMatchesTable,
  }
}
