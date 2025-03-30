import { Match, RangeWR } from '@/models/match.model'
import useModal from '@hooks/useModal'
import { useEffect, useState } from 'react'
// interface useCrudMatchProps {
//   currentMatch: Match
// }
export const useCrudMatch = (currentMatch: Match) => {
  const [localMatch, setLocalMatch] = useState<Match>(
    structuredClone(currentMatch),
  )
  const { closeModal } = useModal()
  const onChangeCounter = (victories: number, defeats: number) => {
    const match = structuredClone(localMatch)
    match.victories = victories
    match.defeats = defeats
    setLocalMatch(match)
  }
  const onChangeSeason = (seasonID: string) => {
    const match = structuredClone(localMatch)
    match.seasonProfile.season._id = seasonID
    setLocalMatch(match)
  }
  const onChangeRange = (range: RangeWR) => {
    const match = structuredClone(localMatch)
    match.range = range
    setLocalMatch(match)
  }
  const cancelCrudMatch = () => {
    setLocalMatch(structuredClone(currentMatch))
    closeModal('crudMatch')
  }
  useEffect(() => {
    if (currentMatch !== localMatch)
      setLocalMatch(structuredClone(currentMatch))
  }, [currentMatch])

  return {
    localMatch,
    onChangeSeason,
    onChangeCounter,
    onChangeRange,
    cancelCrudMatch,
  }
}
