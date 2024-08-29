import '../css/App.css'
import CardDetails from '../components/cardDetails'
import CardCalendar from '../components/CardCalendar'
import Settings from '../components/modals/Settings'
import CrudMatch from '../components/modals/CrudMatch'
import Confirm from '../components/modals/Confirm'
import CardChart from '../components/CardChart'

function StatsPage({ isToggleMenu, handleShowModal }) {
  return (
    <>
      <main className={`content ${isToggleMenu ? '' : 'closed'}`}>
        <h2 className='content-title'>wr Stats\home </h2>
        <section className='section'>
          <Settings />
          <CrudMatch />
          <Confirm titleMessage='are you sure to log out?' />
          <CardChart></CardChart>
          <CardChart></CardChart>
        </section>
      </main>
    </>
  )
}
export default StatsPage
