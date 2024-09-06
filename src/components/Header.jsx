import { CiLogout, CiMenuBurger, CiSettings } from 'react-icons/ci'
import Confirm from './modals/Confirm'
import Settings from './modals/Settings'
import css from '../css/Header.module.css'
import { handleShowModal } from '../logic'
function Header() {
  return (
    <header className={css.header}>
      <label>
        <input type='checkbox' name='toggleMenu' className='toggleMenu' />
        <CiMenuBurger size={28} />
      </label>
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
