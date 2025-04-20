import Footer from '@components/Layout/Footer/Footer'
import { NavLink, Outlet } from 'react-router-dom'
import css from './GuestProfile.module.css'
function GuestProfile() {
  const activateLink = (value: boolean) => {
    return value === true ? css.active : ''
  }
  return (
    <div className='body-landingPage'>
      {/* the div sytles come from App.css */}
      <header className={css.header}>
        <h1 className={css.h1}>WR STATS</h1>
        <nav className={css.nav}>
          <NavLink
            to={'/'}
            className={({ isActive }) => activateLink(isActive)}
          >
            home
          </NavLink>
          <NavLink
            to={'/login'}
            className={({ isActive }) => activateLink(isActive)}
          >
            login
          </NavLink>
          <NavLink
            to={'/signup'}
            className={({ isActive }) => activateLink(isActive)}
          >
            sign up
          </NavLink>
        </nav>
      </header>
      <main className={css.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
export default GuestProfile
