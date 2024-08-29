import { CiLogout, CiMenuBurger, CiSettings } from 'react-icons/ci'
import Confirm from './modals/Confirm'
import Settings from './modals/Settings'
import css from '../css/Header.module.css'
function Header({ toggleMenu, handleShowModal }) {
  return (
    <header className={css.header}>
      <button onClick={toggleMenu}>
        <CiMenuBurger size={28} />
      </button>
      <h1>WR STATS</h1>
      <button
        onClick={() => {
          handleShowModal('confirm')
        }}
      >
        <CiLogout size={28} />
      </button>
      <button
        onClick={() => {
          handleShowModal('settings')
        }}
      >
        <CiSettings size={28} />
      </button>
      <Settings />
      <Confirm titleMessage='are you sure to log out?' />
    </header>
  )
}
export default Header
