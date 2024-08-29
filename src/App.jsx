import './css/App.css'
import CardDetails from './components/cardDetails'
import CardCalendar from './components/CardCalendar'
import Settings from './components/modals/Settings'
import CrudMatch from './components/modals/CrudMatch'
import { CiLogout, CiSettings, CiMenuBurger } from 'react-icons/ci'
import { useState } from 'react'
import Confirm from './components/modals/Confirm'
import Stats from './components/Stats'
import CardChart from './components/CardChart'
function App() {
  const [isToggleMenu, setIsToggleMenu] = useState(false)

  const toggleMenu = () => {
    setIsToggleMenu(!isToggleMenu)
  }
  const handleShowModal = (id) => {
    document.getElementById(id).showModal()
  }
  return (
    <>
      <header className='header'>
        <button onClick={toggleMenu}>
          <CiMenuBurger size={28} />
        </button>
        <h1>WR STATS</h1>
        <button
          onClick={() => {
            handleShowModal('confirm')
          }}
        >
          <CiLogout size={28} />
        </button>
        <button
          onClick={() => {
            handleShowModal('settings')
          }}
        >
          <CiSettings size={28} />
        </button>
      </header>

      <nav className={`nav ${isToggleMenu ? '' : 'closed'}`}>
        <a className='active'>HOME</a>
        <a>STATS</a>
        <a>SHEETS</a>
      </nav>
      <main className={`content ${isToggleMenu ? '' : 'closed'}`}>
        <h2 className='content-title'>wr Stats\home </h2>
        <section className='section'>
          <Settings />
          <CrudMatch />
          <Confirm titleMessage='are you sure to log out?' />

          <CardChart></CardChart>
          <CardChart></CardChart>

          <CardCalendar />
          <CardDetails showCrudMatch={() => handleShowModal('crudMatch')} />
        </section>
      </main>
    </>
  )
}

export default App
