import { Match, QueryMatchesDto } from '@/models/match.model'
import MatchService from '@/services/match.service'
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
    console.log(matches)
    if (seasonProfileID === 'all') return matches
    return matches.filter(
      (match) => match.seasonProfile._id === seasonProfileID,
    )
  }

  const getMatchesbyCompare = async (seasonProfileIDs: string[]) => {
    if (seasonProfileIDs.length == 0)
      return [getMatchesBySeason('all').map(toMachPointXY)]
    if (seasonProfileIDs.length == 1)
      return [getMatchesBySeason(seasonProfileIDs[0]).map(toMachPointXY)]

    const dataframes = await Promise.all(
      seasonProfileIDs.map(async (seasonProfileID) => {
        const newMatches = getMatchesBySeason(seasonProfileID)

        const data = newMatches.map((item, index) => {
          const date = new Date(0)
          date.setDate(date.getDate() + index)
          const time = formatDate(date.toISOString())
          return {
            time,
            value: item.stats?.acumDiff ?? 0,
          }
        })
        return data
      }),
    )

    return dataframes
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
