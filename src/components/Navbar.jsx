import { NavLink } from 'react-router-dom'
import css from '../css/Navbar.module.css'
function Navbar({ isToggleMenu }) {
  const activateLink = (value) => {
    console.log(value)
    return value === true ? css.active : ''
  }
  return (
    <nav className={`${css.nav} ${isToggleMenu ? '' : css.closed}`}>
      <NavLink to='home' className={({ isActive }) => activateLink(isActive)}>
        HOME
      </NavLink>
      <NavLink to='stats' className={({ isActive }) => activateLink(isActive)}>
        STATS
      </NavLink>
      <NavLink to='sheets' className={({ isActive }) => activateLink(isActive)}>
        SHEETS
      </NavLink>
    </nav>
  )
}
export default Navbar
