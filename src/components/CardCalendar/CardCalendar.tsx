import { Match } from '@/models/match.model'
import { Season } from '@/models/season.model'
import Card from '@components/Card/Card'
import CounterView from '@components/CounterView/CounterView'
import Select from '@components/Select/Select'
import { useState } from 'react'
import Calendar from 'react-calendar'
import './Calendar.css'
import css from './CardCalendar.module.css'

type CardCalendarProps = {
  match: Match
  seasons: Season[]
  onSelectDate: (date: Date) => void
}
//TO DO
//fix date type, here use value
type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

function CardCalendar({ match, onSelectDate, seasons }: CardCalendarProps) {
  const [currentDate, setCurrentDate] = useState<Value>(new Date())
  const options = seasons.map((season) => ({
    id: season._id,
    value: season.seasonName,
  }))
  const onChange = (date: Value) => {
    setCurrentDate(date)
    onSelectDate(date as Date)
  }
  const onSelectedSeason = (seasonID: string) => {
    console.log(seasonID)
  }
  return (
    <Card title='i dont remember the title'>
      <section className={css.cardCalendar}>
        <Select
          name='seasons'
          selectedOption={options[0]}
          options={options}
          onSelectedOption={onSelectedSeason}
        />
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
