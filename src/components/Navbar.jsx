import { NavLink } from 'react-router-dom'
function Navbar({ isToggleMenu }) {
  return (
    <nav className={`nav ${isToggleMenu ? '' : 'closed'}`}>
      <NavLink to='/home'>HOME</NavLink>
      <NavLink to='/stats'>STATS</NavLink>
      <NavLink to='/sheets'>SHEETS</NavLink>
    </nav>
  )
}
export default Navbar
