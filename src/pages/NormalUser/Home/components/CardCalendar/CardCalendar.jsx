import Card from '@/components/Card'
import CounterView from './CounterView/CounterView'
import Calendar from 'react-calendar'

import './Calendar.css'
import css from './CardCalendar.module.css'
import { useState } from 'react'

function CardCalendar({ data }) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [currentMatch, setCurrentMatch] = useState({
    victories: '00',
    defeats: '00',
  })

  const onClick = (value) => {
    const formatedDate = value.toISOString().split('T')[0]
    // console.log(formatedDate)

    const match = data.find((item) => item.date === formatedDate)
    setCurrentMatch(match ? match : { victories: 's/n', defeats: 's/n' })
    setCurrentDate(value)
  }

  return (
    <Card title='i dont remember the title'>
      <section className={css.cardCalendar}>
        <CounterView data={currentMatch} />
        <Calendar
          onChange={(value) => onClick(value)}
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
