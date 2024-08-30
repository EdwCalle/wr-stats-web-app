import '../css/Calendar.css'
import Card from './Card'
import CounterView from './CounterView'
import Calendar from 'react-calendar'

import css from '../css/CardCalendar.module.css'
function CardCalendar() {
  return (
    <Card title='i dont remember the title'>
      <section className={css.cardCalendar}>
        <CounterView />
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
