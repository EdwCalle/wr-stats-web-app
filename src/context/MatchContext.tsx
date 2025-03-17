import { exampleMatch, Match } from '@/models/match.model'
import { createContext, ReactNode, useContext, useState } from 'react'
interface MatchContextType {
  currentMatch: Match
  createMatch: (newMatch: Match) => void
}
const MatchContext = createContext<MatchContextType | undefined>(undefined)
interface MatchProviderProps {
  children: ReactNode
}
export const UseMatch = () => {
  const context = useContext(MatchContext)
  if (!context) throw new Error('UseMatches must be used within a TaskProvider')
  return context
}
function MatchProvider({ children }: MatchProviderProps) {
  const [currentMatch, setMatch] = useState<Match>(exampleMatch)
  const createMatch = (newMatch: Match) => {
    setMatch(newMatch)
  }
  return (
    <MatchContext.Provider value={{ currentMatch, createMatch }}>
      {children}
    </MatchContext.Provider>
  )
}
export default MatchProvider
