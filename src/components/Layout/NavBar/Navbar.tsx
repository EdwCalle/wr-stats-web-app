import { NavLink } from 'react-router-dom'
import css from './Navbar.module.css'
function Navbar() {
  const activateLink = (value: boolean) => {
    return value === true ? css.active : ''
  }

  return (
    <nav className={css.nav}>
      <NavLink
        to='/player/home'
        className={({ isActive }) => activateLink(isActive)}
      >
        Home
      </NavLink>
      <NavLink
        to='/player/stats'
        className={({ isActive }) => activateLink(isActive)}
      >
        STATS
      </NavLink>
      <NavLink
        to='/player/matches'
        className={({ isActive }) => activateLink(isActive)}
      >
        MATCHES
      </NavLink>
    </nav>
  )
}
export default Navbar
