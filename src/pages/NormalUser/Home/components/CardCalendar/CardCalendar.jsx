import Card from '@/components/Card'
import CounterView from './CounterView/CounterView'
import Calendar from 'react-calendar'

import './Calendar.css'
import css from './CardCalendar.module.css'
import { useState } from 'react'

function CardCalendar({ data, onSelectDate }) {
  const [currentDate, setCurrentDate] = useState(new Date())

  const onChange = (value) => {
    setCurrentDate(value)
    onSelectDate(value)
  }

  return (
    <Card title='i dont remember the title'>
      <section className={css.cardCalendar}>
        <CounterView data={data} />
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
