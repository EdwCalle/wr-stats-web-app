import { Match } from '@/models/match.model'
import Card from '@components/Card/Card'
import CounterView from '@components/CounterView/CounterView'
import useCalendar from '@hooks/useCalendar'
import { newDate } from '@utils/logic'
import { useState } from 'react'
import Calendar from 'react-calendar'
import { LooseValue } from 'react-calendar/src/shared/types.js'
import './Calendar.css'
import css from './CardCalendar.module.css'

type CardCalendarProps = {
  currentMatch: Match | undefined
  matches: Match[]
  onSelectDate: (date: Date) => void
}

function CardCalendar({
  currentMatch,
  onSelectDate,
  matches,
}: CardCalendarProps) {
  const [currentDate, setCurrentDate] = useState<LooseValue>(newDate())
  const { tileClassName } = useCalendar({ matches })
  const onChange = (date: LooseValue) => {
    onSelectDate(date as Date)
    setCurrentDate(date)
  }
  return (
    <Card
      title='Stats from date selected'
      subtitle={currentDate?.toLocaleString()}
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
          value={currentDate}
          tileClassName={tileClassName}
        />
      </section>
    </Card>
  )
}

export default CardCalendar
