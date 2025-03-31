import { Match } from '@/models/match.model'
import { compareDate } from '@utils/logic'
import { useCallback } from 'react'
import { LooseValue } from 'react-calendar/src/shared/types.js'
interface useCalendarProps {
  matches: Match[]
}

const useCalendar = ({ matches }: useCalendarProps) => {
  const tileClassName = useCallback(
    ({ date, view }: { date: LooseValue; view: string }) => {
      // Add class to tiles in month view only
      //TO DO
      //fix conflicts with timezone
      if (view !== 'month' || !(date instanceof Date)) return null

      const foundMatch = matches.find((match) => compareDate(match.date, date))

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
  return { tileClassName }
}

export default useCalendar
