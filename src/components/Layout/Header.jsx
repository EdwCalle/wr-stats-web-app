import { CiLogout, CiMenuBurger, CiSettings } from 'react-icons/ci'
import Confirm from '@/components/modals/Confirm'
import Settings from '@/components/modals/Settings'
import css from './Header.module.css'
import { handleShowModal } from '@/logic'
function Header() {
  return (
    <header className={css.header}>
      <label className={css.label}>
        <input
          type='checkbox'
          name='toggleMenu'
          className={`toggleMenu ${css.checkbox}`}
        />
        <CiMenuBurger size={28} />
      </label>
      <h1 className={css.h1}>WR STATS</h1>
      <button
        className={css.button}
        onClick={() => {
          handleShowModal('confirm')
        }}
      >
        <CiLogout size={28} />
      </button>
      <button
        className={css.button}
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
