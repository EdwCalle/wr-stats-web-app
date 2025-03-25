import { Match } from '@/models/match.model'
import Card from '@components/Card/Card'
import CounterView from '@components/CounterView/CounterView'
import useCalendar from '@hooks/useCalendar'
import { useState } from 'react'
import Calendar from 'react-calendar'
import './Calendar.css'
import css from './CardCalendar.module.css'

type CardCalendarProps = {
  currentMatch: Match | undefined
  matches: Match[]
  onSelectDate: (date: Date) => void
}
//TO DO
//fix date type, here use value
type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

function CardCalendar({
  currentMatch,
  onSelectDate,
  matches,
}: CardCalendarProps) {
  const [currentDate, setCurrentDate] = useState<Value>(new Date())
  const { tileContent } = useCalendar({ matches })

  const onChange = (date: Value) => {
    setCurrentDate(date)
    onSelectDate(date as Date)
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
          minDate={new Date('2021-01-08')}
          maxDate={new Date()}
          onChange={(value) => onChange(value)}
          value={currentDate}
          tileClassName={tileContent}
        />
      </section>
    </Card>
  )
}

export default CardCalendar
