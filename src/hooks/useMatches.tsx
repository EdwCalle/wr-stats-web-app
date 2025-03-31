import { Match } from '@/models/match.model'
import MatchService from '@/services/match.service'
import { formatDate } from '@utils/modules/TimeWR'
import { useState } from 'react'

export const useMatches = () => {
  const [matches, setMatches] = useState<Match[]>([])

  const loadMatches = async (items: Match[]) => {
    setMatches([...items])
  }

  const getMatches = async () => {
    const res = await MatchService.findAll()
    return MatchService.toMatches(res.data)
  }

  const autoLoadMatches = async () => {
    const items = await getMatches()
    setMatches([...items])
  }
  const toMatchesOptions = () => {
    return matches.map((item) => ({
      time: formatDate(item.date.toISOString()),
      value: item.stats?.acumDiff ?? 0,
    }))
  }

  return {
    matches,
    getMatches,
    loadMatches,
    autoLoadMatches,
    toMatchesOptions,
  }
}
