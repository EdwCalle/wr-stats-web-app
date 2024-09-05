import Login from '../components/Login'
import Register from '../components/Register'
import css from '../css/LandingPage.module.css'
function LandingPage() {
  return (
    <>
      {/* the div sytles come from App.css */}
      <div className='body-landingPage' role='body'>
        <header>
          <h1 className={css.h1}>WR STATS</h1>
        </header>
        <main className={css.main}>
          <Register />
          <div></div>
          <Login />
        </main>
      </div>
    </>
  )
}
export default LandingPage
