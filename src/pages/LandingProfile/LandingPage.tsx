import Login from './components/Login'
import Register from './components/Register'
import css from './LandingPage.module.css'
function LandingPage() {
  return (
    <div className='body-landingPage'>
      {/* the div sytles come from App.css */}
      <header>
        <h1 className={css.h1}>WR STATS</h1>
      </header>
      <main className={css.main}>
        <Login />
        <Register />
      </main>
    </div>
  )
}
export default LandingPage
