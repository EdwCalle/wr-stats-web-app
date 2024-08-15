import '../css/CardCalendar.css'
import CounterView from './CounterView'
import calendar from '../assets/calendar.jpg'
import '../css/Card.css'
function CardCalendar() {
  return (
    <article className='card card-calendar'>
      <div className='card-header'>
        <h3 className='card-title'>Stats from date Selected</h3>
        <h4 className='card-subtitle'>12/12/24</h4>
      </div>
      <CounterView></CounterView>
      <img src={calendar} alt='' className='card-calendarView' />
      <button className='card-button'>select a date</button>
    </article>
  )
}

export default CardCalendar
