import { Match, newMatch, Ranged } from '@/models/match.model'
import useModal from '@hooks/useModal'
import { useEffect, useState } from 'react'
// interface useCrudMatchProps {
//   currentMatch: Match
// }
export const useCrudMatch = (currentMatch: Match) => {
  const [localMatch, setLocalMatch] = useState<Match>(currentMatch)
  const { openModal, closeModal } = useModal()
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
  const resetCrudMatch = (match: Match | undefined, date: Date) => {
    if (match) setLocalMatch(match)
    else setLocalMatch({ ...newMatch, date })
    openModal('crudMatch')
  }
  const cancelCrudMatch = () => {
    setLocalMatch(newMatch)
    closeModal('crudMatch')
  }
  useEffect(() => {
    if (currentMatch !== localMatch) setLocalMatch(currentMatch)
  }, [currentMatch])

  return {
    localMatch,
    onChangeCounter,
    onChangeRange,
    resetCrudMatch,
    cancelCrudMatch,
  }
}
