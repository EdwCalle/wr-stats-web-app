import Confirm from '@components/modals/Confirm'
import Settings from '@components/modals/Settings'
import useModal from '@hooks/useModal'
import { CiLogout, CiMenuBurger, CiSettings } from 'react-icons/ci'
import css from './Header.module.css'

function Header() {
  const { openModal } = useModal()
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
          openModal('confirm')
        }}
      >
        <CiLogout size={28} />
      </button>
      <button
        className={css.button}
        onClick={() => {
          openModal('settings')
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
