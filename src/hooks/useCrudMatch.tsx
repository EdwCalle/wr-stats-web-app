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
  const [isLoading, setIsloading] = useState(false)
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
    try {
      setIsloading(true)
      const newMatch = structuredClone(localMatch)
      const result = await MatchService.createOne(newMatch)
      toast(`Match created successfully`)
      closeModal('crudMatch')
      onSubmitted(newMatch.date)
      console.log(result.data)
    } catch (error) {
      showError(error, 'Error on create match', 'modal')
    } finally {
      setIsloading(false)
    }
  }
  const onUpdateMatch = async () => {
    try {
      setIsloading(true)
      const newMatch = structuredClone(localMatch)
      const result = await MatchService.updateOne(newMatch)
      closeModal('crudMatch')
      onSubmitted(newMatch.date)
      console.log(result.data)
      toast(`Match updated successfully`)
    } catch (error) {
      showError(error, 'Error on update match', 'modal')
    } finally {
      setIsloading(false)
    }
  }
  const onDeleteMatch = async () => {
    try {
      setIsloading(true)
      const newMatch = structuredClone(localMatch)
      const result = await MatchService.deleteOne(newMatch._id, newMatch.date)
      onSubmitted(newMatch.date)
      console.log(result.data)
      closeModal('crudMatch')
      toast.info(`Match deleted successfully`)
    } catch (error) {
      showError(error, 'Error on delete match', 'modal')
    } finally {
      setIsloading(false)
    }
  }

  const onCancel = () => {
    setLocalMatch(structuredClone(currentMatch))
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
    onDeleteMatch,
    onCancel,
    onConfirm,
    isLoading,
  }
}
