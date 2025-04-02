import { Match, QueryMatchesDto } from '@/models/match.model'
import MatchService from '@/services/match.service'
import { formatDate } from '@utils/modules/TimeWR'
import { useState } from 'react'

export const useMatches = () => {
  const [matches, setMatches] = useState<Match[]>([])

  const loadMatches = async (items: Match[]) => {
    setMatches([...items])
  }

  const getMatches = async (query?: QueryMatchesDto) => {
    const res = await MatchService.findAll(query)
    return MatchService.toMatches(res.data)
  }

  const autoLoadMatches = async () => {
    const items = await getMatches()
    setMatches([...items])
  }

  const toMatchOption = (match: Match) => {
    return {
      time: formatDate(match.date.toISOString()),
      value: match.stats?.acumDiff ?? 0,
    }
  }

  const getMatchesBySeason = (seasonID: string) => {
    if (seasonID === 'all') return matches.map(toMatchOption)
    return matches
      .filter((match) => match.seasonProfile._id === seasonID)
      .map(toMatchOption)
  }

  const getDataFrame = async (seasonProfileIDs: string[]) => {
    try {
      const dataframes = await Promise.all(
        seasonProfileIDs.map(async (seasonProfileID) => {
          const newMatches = await getMatches({
            seasonProfileID,
            limit: 0,
            page: 1,
          })

          const data = newMatches.map((item, index) => {
            const date = new Date(0)
            date.setDate(date.getDate() + index)
            const time = formatDate(date.toISOString())
            return {
              time,
              value: item.stats?.acumDiff ?? 0,
            }
          })

          return data // Return the processed data for each seasonProfileID
        }),
      )

      console.log(dataframes)
      return dataframes
    } catch (error) {
      console.error('Error in getDataFrame:', error)
      return [] // Or throw the error, depending on how you want to handle it
    }
  }

  const getMatchesTable = async () => {
    const res = await MatchService.findAll()
    return MatchService.toMatchesTable(res.data)
  }

  return {
    matches,
    getMatches,
    loadMatches,
    autoLoadMatches,
    getDataFrame,
    getMatchesBySeason,
    getMatchesTable,
  }
}
