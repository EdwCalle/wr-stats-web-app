import { Match } from '@/models/match.model'
import { useCallback } from 'react'
interface useCalendarProps {
  matches: Match[]
}
type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

const useCalendar = ({ matches }: useCalendarProps) => {
  const tileContent = useCallback(
    ({ date, view }: { date: Value; view: string }) => {
      // Add class to tiles in month view only
      //TO DO
      //fix conflicts with timezone
      if (view !== 'month' || !(date instanceof Date)) return null

      const foundMatch = matches.find(
        (match) => match.date.getTime() === date.getTime(),
      )

      if (!foundMatch) return 'newMatch'
      if (!foundMatch.stats) return 'noStats'

      const { diff } = foundMatch.stats

      if (diff >= 5) return 'match good'
      if (diff >= 2) return 'match ok'
      if (diff >= 0) return 'match neutral'
      if (diff >= -2) return 'match regular'
      return 'match bad'
    },
    [matches],
  )
  return { tileContent }
}

export default useCalendar
