import { Match } from '@/models/match.model'
import MatchService from '@/services/match.service'
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

  return { matches, getMatches, loadMatches }
}
