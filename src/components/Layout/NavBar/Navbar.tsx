import { NavLink } from 'react-router-dom'
import css from './Navbar.module.css'
function Navbar() {
  const activateLink = (value: boolean) => {
    return value === true ? css.active : ''
  }

  return (
    <nav className={css.nav}>
      <NavLink to='home' className={({ isActive }) => activateLink(isActive)}>
        DASHBOARD
      </NavLink>
      <NavLink to='stats' className={({ isActive }) => activateLink(isActive)}>
        STATS
      </NavLink>
      <NavLink
        to='matches'
        className={({ isActive }) => activateLink(isActive)}
      >
        MATCHES
      </NavLink>
    </nav>
  )
}
export default Navbar
