import { Match, newMatch, Ranged } from '@/models/match.model'
import { useEffect, useState } from 'react'

const useCrudMatch = (currentMatch: Match | undefined) => {
  // const useCrudMatch = () => {
  const [localMatch, setLocalMatch] = useState<Match>(newMatch)

  const onChangeCounter = (victories: number, defeats: number) => {
    const match = { ...localMatch }
    match.victories = victories
    match.defeats = defeats
    setLocalMatch(match)
  }

  const onChangeRange = (range: Ranged) => {
    const match = { ...localMatch }
    match.range = range
    setLocalMatch(match)
  }

  useEffect(() => {
    if (currentMatch) setLocalMatch(currentMatch)
    else setLocalMatch(newMatch)
  }, [])

  return {
    localMatch,
    onChangeCounter,
    onChangeRange,
  }
}

export default useCrudMatch
