import { Match, QueryMatchesDto } from '@/models/match.model'
import MatchService from '@/services/match.service'
import { formatDate } from '@utils/modules/TimeWR'
import { useState } from 'react'

export const useMatches = () => {
  const [matches, setMatches] = useState<Match[]>([])

  const loadMatches = async (items: Match[]) => {
    setMatches([...items])
  }

  const getMatches = async (
    query: QueryMatchesDto = {
      page: 1,
      limit: 0,
      seasonProfileID: '',
    },
  ) => {
    const res = await MatchService.findAll(query)
    return MatchService.toMatches(res.data)
  }

  const autoLoadMatches = async (
    query: QueryMatchesDto = {
      page: 1,
      limit: 0,
      seasonProfileID: '',
    },
  ) => {
    const items = await getMatches(query)
    setMatches([...items])
  }
  const toMatchesOptions = () => {
    return matches.map((item) => ({
      time: formatDate(item.date.toISOString()),
      value: item.stats?.acumDiff ?? 0,
    }))
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

  return {
    matches,
    getMatches,
    loadMatches,
    autoLoadMatches,
    toMatchesOptions,
    getDataFrame,
  }
}
