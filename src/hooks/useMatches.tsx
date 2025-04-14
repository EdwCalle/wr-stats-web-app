import { Match, QueryMatchesDto } from '@/models/match.model'
import MatchService from '@/services/match.service'
import { SeriesData } from '@components/Chart/Chart'
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
  const toMachPointXY2 = (match: Match, index: number) => {
    // const date = new Date(index)
    // date.setDate(date.getDate() + index)
    // const time = formatDate(date.toISOString())
    return {
      time: index,
      value: match.stats?.acumDiff ?? 0,
    }
  }

  const getMatchesBySeason = (seasonProfileID: string) => {
    if (seasonProfileID === 'all') return matches
    return matches.filter(
      (match) => match.seasonProfile._id === seasonProfileID,
    )
  }

  const getMatchesbyCompare = (seasonProfileIDs: string[]): SeriesData[] => {
    if (seasonProfileIDs.length == 0) {
      return [
        {
          dataframe: getMatchesBySeason('all').map(toMachPointXY),
          label: 'all',
        },
      ]
    }

    if (seasonProfileIDs.length == 1)
      return [
        {
          dataframe: getMatchesBySeason(seasonProfileIDs[0]).map(toMachPointXY),
          label: seasonProfileIDs[0],
        },
      ]

    return seasonProfileIDs.map((seasonProfileID, index) => {
      const newMatches = getMatchesBySeason(seasonProfileID)
      const dataframe = newMatches.map(toMachPointXY2)
      const label = dataframe
        ? newMatches[0].seasonProfile.season.seasonName
        : seasonProfileID
      const color = randomColor(index)
      return { dataframe, label, color }
    })
  }
  const randomColor = (index: number) => {
    const hash = (index * 2654435761) % 2 ** 32 // A large prime number
    const r = (hash & 0xff0000) >> 16
    const g = (hash & 0x00ff00) >> 8
    const b = hash & 0x0000ff
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
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
