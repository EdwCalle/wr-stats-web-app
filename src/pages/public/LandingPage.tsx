import { Link } from 'react-router-dom'
import css from './LandingPage.module.css'
function LandingPage() {
  return (
    <div className='body-landingPage'>
      {/* the div sytles come from App.css */}
      <header>
        <h1 className={css.h1}>WR STATS</h1>
      </header>
      <main className={css.main}>
        <div>Hello, welcome to wrs stats</div>

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          doloribus aliquam consequatur provident commodi delectus saepe
          molestias, a cupiditate sunt doloremque, animi blanditiis, dicta
          itaque atque necessitatibus maxime quisquam placeat?
        </div>
        <Link to={'/login'}>sign in</Link>
        <Link to={'/register'}>sign up</Link>
      </main>
    </div>
  )
}
export default LandingPage
