import { exampleMatch, Match } from '@/models/match.model'
import MatchService from '@/services/match.service'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
interface MatchContextType {
  currentMatch: Match
  setCurrentMatch: (newMatch: Match) => void
  createMatch: (newMatch: Match) => void
  matches: Match[]
}
const MatchContext = createContext<MatchContextType | undefined>(undefined)
interface MatchProviderProps {
  children: ReactNode
}
export const useMatch = () => {
  const context = useContext(MatchContext)
  if (!context) throw new Error('UseMatches must be used within a TaskProvider')
  return context
}
function MatchProvider({ children }: MatchProviderProps) {
  const [matches, setMatches] = useState<Match[]>([])
  const [currentMatch, setCurrentMatch] = useState<Match>(exampleMatch)
  const createMatch = (newMatch: Match) => {
    setCurrentMatch(newMatch)
  }
  const getMatches = async () => {
    const m = await MatchService.getAllMatches2()
    setMatches([...m])
  }
  useEffect(() => {
    getMatches()
  }, [])
  return (
    <MatchContext.Provider
      value={{ currentMatch, setCurrentMatch, createMatch, matches }}
    >
      {children}
    </MatchContext.Provider>
  )
}
export default MatchProvider
