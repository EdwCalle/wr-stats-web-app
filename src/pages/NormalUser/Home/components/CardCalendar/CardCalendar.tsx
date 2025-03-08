import Calendar from 'react-calendar'
import './Calendar.css'
import css from './CardCalendar.module.css'
import { useState } from 'react'
import Card from '../../../../../components/Card'
import CounterView from './CounterView/CounterView'
import { Match } from '../../../../../utils/interfaces/match.interface'

type CardCalendarProps = {
  match: Match
  onSelectDate: (date: Date) => void
}
//TO DO
//fix date type, here use value
type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

function CardCalendar({ match, onSelectDate }: CardCalendarProps) {
  const [currentDate, setCurrentDate] = useState<Value>(new Date())

  const onChange = (date: Value) => {
    setCurrentDate(date)
    onSelectDate(date as Date)
  }

  return (
    <Card title='i dont remember the title'>
      <section className={css.cardCalendar}>
        <CounterView match={match} />
        <Calendar
          onChange={(value) => onChange(value)}
          value={currentDate}
          calendarType='gregory'
          maxDate={new Date()}
          minDate={new Date('01/01/2020')}
        />
      </section>
    </Card>
  )
}

export default CardCalendar
