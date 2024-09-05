import { NavLink } from 'react-router-dom'
import css from '../css/Navbar.module.css'
function Navbar({ isToggleMenu }) {
  return (
    <nav className={`${css.nav} ${isToggleMenu ? '' : css.closed}`}>
      <NavLink to='home'>HOME</NavLink>
      <NavLink to='stats'>STATS</NavLink>
      <NavLink to='sheets'>SHEETS</NavLink>
    </nav>
  )
}
export default Navbar
