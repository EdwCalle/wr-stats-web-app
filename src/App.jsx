import './css/App.css'
import CardDetails from './components/cardDetails'
import CardCalendar from './components/CardCalendar'

import { CiLogout, CiSettings, CiMenuBurger } from 'react-icons/ci'
import { useState } from 'react'
function App() {
  const [isToggleMenu, setIsToggleMenu] = useState(false)

  const toggleMenu = () => {
    setIsToggleMenu(!isToggleMenu)
  }
  return (
    <>
      <header className='header'>
        <button onClick={toggleMenu}>
          <CiMenuBurger size={48} />
        </button>
        <h1>WR STATS</h1>
        <button>
          <CiLogout size={48} />
        </button>
        <button>
          <CiSettings size={48} />
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
          <CardCalendar />
          <CardDetails />
        </section>
      </main>
    </>
  )
}

export default App
