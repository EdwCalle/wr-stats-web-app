import Card from '@/components/Card'
import CounterView from './CounterView/CounterView'
import Calendar from 'react-calendar'

import './Calendar.css'
import css from './CardCalendar.module.css'

function CardCalendar({ data }) {
  return (
    <Card title='i dont remember the title'>
      <section className={css.cardCalendar}>
        <CounterView data={data} />
        <Calendar
          calendarType='gregory'
          maxDate={new Date()}
          minDate={new Date('01/01/2020')}
        />
      </section>
    </Card>
  )
}

export default CardCalendar
