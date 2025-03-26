import { Match } from '@/models/match.model'
import MatchService from '@/services/match.service'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
interface MatchContextType {
  currentMatch: Match | undefined
  // setCurrentMatch: (newMatch: Match) => void
  createMatch: (newMatch: Match) => void
  getMatchByDate: (date: Date) => void
  matches: Match[]
}
const MatchContext = createContext<MatchContextType | undefined>(undefined)
interface MatchProviderProps {
  children: ReactNode
}
export const useMatch = () => {
  const context = useContext(MatchContext)
  if (!context)
    throw new Error('UseMatches must be used within a MatchProvider')
  return context
}
function MatchProvider({ children }: MatchProviderProps) {
  const [matches, setMatches] = useState<Match[]>([])
  const [currentMatch, setCurrentMatch] = useState<Match | undefined>()
  const createMatch = (newMatch: Match) => {
    setCurrentMatch(newMatch)
  }
  const getMatchByDate = (date: Date) => {
    const foundMatch = MatchService.findOneByDate(matches, date)
    if (foundMatch) setCurrentMatch(foundMatch)
    else setCurrentMatch(undefined)
  }
  const getMatches = async () => {
    const res = await MatchService.findAll()
    const newMatches = MatchService.toMatches(res.data)
    setMatches(newMatches)
  }
  useEffect(() => {
    getMatches()
    getMatchByDate(new Date())
  }, [])
  return (
    <MatchContext.Provider
      value={{
        currentMatch,
        createMatch,
        getMatchByDate: getMatchByDate,
        matches,
      }}
    >
      {children}
    </MatchContext.Provider>
  )
}
export default MatchProvider
