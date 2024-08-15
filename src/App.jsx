import './css/App.css'
import CardDetails from './components/cardDetails'
import CardCalendar from './components/CardCalendar'
import { CiLogout, CiSettings } from 'react-icons/ci'
function App() {
  return (
    <>
      <header className='header'>
        <nav className='nav'>
          <h1>WR STATS</h1>
          <button>
            <CiLogout size={48} />
          </button>
          <button>
            <CiSettings size={48} />
          </button>
        </nav>
      </header>
      <aside className='aside'>
        <nav>
          <a className='active'>HOME</a>
          <a>STATS</a>
          <a>SHEETS</a>
        </nav>
      </aside>
      <main className='content'>
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
