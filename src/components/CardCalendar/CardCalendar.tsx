import { Match } from '@/models/match.model'
import Card from '@components/Card/Card'
import CounterView from '@components/CounterView/CounterView'
import useCalendar from '@hooks/useCalendar'
import { newDate } from '@utils/logic'
import Calendar from 'react-calendar'
import { LooseValue } from 'react-calendar/src/shared/types.js'
import './Calendar.css'
import css from './CardCalendar.module.css'

type CardCalendarProps = {
  currentMatch: Match
  matches: Match[]
  onSelectDate: (date: Date) => void
}

function CardCalendar({
  currentMatch,
  onSelectDate,
  matches,
}: CardCalendarProps) {
  const { tileClassName } = useCalendar({ matches })
  const onChange = (date: LooseValue) => {
    onSelectDate(date as Date)
  }
  return (
    <Card
      title='Stats from date selected'
      subtitle={currentMatch.date.toLocaleString()}
    >
      <section className={css.cardCalendar}>
        {currentMatch && <CounterView match={currentMatch} />}
        {!currentMatch && <>no match</>}
        <Calendar
          showNeighboringMonth={false}
          calendarType='gregory'
          minDate={new Date(2021, 1, 8, 0)}
          maxDate={newDate()}
          onChange={(value) => onChange(value)}
          value={currentMatch.date}
          tileClassName={tileClassName}
        />
      </section>
    </Card>
  )
}

export default CardCalendar
