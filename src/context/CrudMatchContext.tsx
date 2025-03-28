import { Match, newMatch, Ranged } from '@/models/match.model'
import useModal from '@hooks/useModal'
import { createContext, ReactNode, useContext, useState } from 'react'
interface CrudMatchContextType {
  localMatch: Match
  onChangeCounter: (victories: number, defeats: number) => void
  onChangeRange: (range: Ranged) => void
  resetCrudMatch: (match: Match | undefined, date: Date) => void
  cancelCrudMatch: () => void
}
const CrudMatchContext = createContext<CrudMatchContextType | undefined>(
  undefined,
)
export const useCrudMatch = () => {
  const context = useContext(CrudMatchContext)
  if (!context)
    throw new Error('useCrudMatch must be used within a CrudMatchProvider')
  return context
}
interface CrudMatchProviderProps {
  children: ReactNode
}
function CrudMatchProvider({ children }: CrudMatchProviderProps) {
  const [localMatch, setLocalMatch] = useState<Match>(newMatch)
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

  return (
    <CrudMatchContext.Provider
      value={{
        localMatch,
        onChangeCounter,
        onChangeRange,
        resetCrudMatch,
        cancelCrudMatch,
      }}
    >
      {children}
    </CrudMatchContext.Provider>
  )
}
export default CrudMatchProvider
