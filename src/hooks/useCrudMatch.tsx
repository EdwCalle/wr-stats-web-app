import { Match, Ranged } from '@/models/match.model'
import useModal from '@hooks/useModal'
import { useEffect, useState } from 'react'
// interface useCrudMatchProps {
//   currentMatch: Match
// }
export const useCrudMatch = (currentMatch: Match) => {
  const [localMatch, setLocalMatch] = useState<Match>(currentMatch)
  const { closeModal } = useModal()
  const onChangeCounter = (victories: number, defeats: number) => {
    const match = { ...localMatch }
    match.victories = victories
    match.defeats = defeats
    setLocalMatch(match)
  }
  const onChangeSeason = (seasonID: string) => {
    const match = { ...localMatch }
    match.seasonProfile.season._id = seasonID
    setLocalMatch(match)
  }
  const onChangeRange = (range: Ranged) => {
    const match = { ...localMatch }
    match.range = range
    setLocalMatch(match)
  }

  const cancelCrudMatch = () => {
    setLocalMatch(currentMatch)
    closeModal('crudMatch')
  }
  useEffect(() => {
    if (currentMatch !== localMatch) setLocalMatch(currentMatch)
  }, [currentMatch])

  return {
    localMatch,
    onChangeSeason,
    onChangeCounter,
    onChangeRange,
    cancelCrudMatch,
  }
}
