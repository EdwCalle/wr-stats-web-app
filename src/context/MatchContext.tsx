import { Match } from '@/models/match.model'
import { RankedTier } from '@/models/rankedTier.models'
import MatchService from '@/services/match.service'
import useRankedTiers from '@hooks/useRankedTier'
import { newDate } from '@utils/logic'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
interface MatchContextType {
  currentMatch: Match | undefined
  createMatch: (newMatch: Match) => void
  getMatchByDate: (date: Date) => void
  matches: Match[]
  rankedTiers: RankedTier[]
  isLoading?: boolean
  // seasons: Season[] | undefined
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
  const [currentMatch, setCurrentMatch] = useState<Match | undefined>()
  const [isLoading, setIsloading] = useState(true)
  const { rankedTiers, loadRankedTiers } = useRankedTiers()
  const [matches, setMatches] = useState<Match[]>([])
  // const { seasons, loadSeasons } = useSeasons()
  const createMatch = (newMatch: Match) => {
    setCurrentMatch(newMatch)
  }
  const getMatchByDate = (date: Date) => {
    // console.log('first date', matches[0].date.toISOString())
    console.log('on click date:', date.toISOString())
    const foundMatch = MatchService.findOneByDate(matches, date)
    if (foundMatch) setCurrentMatch(foundMatch)
    else setCurrentMatch(undefined)
  }
  const getMatches = async () => {
    const res = await MatchService.findAll()
    const newMatches = MatchService.toMatches(res.data)
    setMatches([...newMatches])
  }
  const loadData = async () => {
    await loadRankedTiers()
    await getMatches()
    getMatchByDate(newDate())
    setIsloading(false)
  }
  useEffect(() => {
    loadData()
  }, [])
  // console.log(
  //   'i render:',
  //   isLoading,
  //   currentMatch,
  //   matches.length,
  //   rankedTiers?.length,
  // )
  return (
    <MatchContext.Provider
      value={{
        currentMatch,
        createMatch,
        getMatchByDate: getMatchByDate,
        matches,
        isLoading,
        rankedTiers,
      }}
    >
      {children}
    </MatchContext.Provider>
  )
}
export default MatchProvider
