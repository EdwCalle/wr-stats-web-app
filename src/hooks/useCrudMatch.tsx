import { Match, RangeWR } from '@/models/match.model'
import MatchService from '@/services/match.service'
import useModal from '@hooks/useModal'
import { showError } from '@utils/modules/HandleErrors'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
interface useCrudMatchProps {
  currentMatch: Match
  onSubmitted: (date: Date) => Promise<void>
}
export const useCrudMatch = ({
  currentMatch,
  onSubmitted,
}: useCrudMatchProps) => {
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
    //TO DO
    // WARNING WITH THE COPY
    match.range = range
    setLocalMatch(match)
  }

  const oncreateMatch = async () => {
    const newMatch = structuredClone(localMatch)
    try {
      const result = await MatchService.createOne(newMatch)
      closeModal('crudMatch')
      toast(`Match created successfully`)
      onSubmitted(newMatch.date)
      console.log(result.data)
    } catch (error) {
      showError(error, 'Error on create match', 'modal')
    }
  }
  const onUpdateMatch = async () => {
    const newMatch = structuredClone(localMatch)
    try {
      const result = await MatchService.updateOne(newMatch)
      closeModal('crudMatch')
      toast(`Match updated successfully`)
      onSubmitted(newMatch.date)
      console.log(result.data)
    } catch (error) {
      showError(error, 'Error on update match', 'modal')
    }
  }
  const onDeleteMatch = async (id: string | null, date: Date) => {
    try {
      await MatchService.deleteOne(id, date)
      closeModal('crudMatch')
      toast(`Match deleted successfully`)
      onSubmitted(date)
    } catch (error) {
      showError(error, 'Error on delete match', 'modal')
    }
  }

  const cancelCrudMatch = () => {
    setLocalMatch(structuredClone(currentMatch))
    closeModal('crudMatch')
  }
  const onConfirm = () => {
    if (localMatch._id && localMatch._id !== null) onUpdateMatch()
    else oncreateMatch()
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
    onConfirm,
    onDeleteMatch,
  }
}
