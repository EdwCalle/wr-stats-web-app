import useAuth from '@/context/AuthContext'
import ButtonIcon from '@components/ButtonIcon/ButtonIcon'
import Modal from '@components/Modal/Modal'
import Settings from '@components/Modal/Settings'
import useModal from '@hooks/useModal'
import { CiLogout, CiMenuBurger, CiSettings } from 'react-icons/ci'
import { NavLink, useNavigate } from 'react-router-dom'
import css from './Header.module.css'

function Header() {
  const { openModal } = useModal()
  const navigate = useNavigate()
  const { logout } = useAuth()
  const handleLogout = () => {
    logout()
    navigate('/')
  }
  return (
    <header className={css.header}>
      <ButtonIcon type='input'>
        <input type='checkbox' name='toggleMenu' className='toggleMenu' />
        <CiMenuBurger size={28} />
      </ButtonIcon>
      <h1 className={css.h1}>
        <NavLink to={'/player'}>WR STATS</NavLink>
      </h1>
      <ButtonIcon
        onClick={() => {
          openModal('settings')
        }}
      >
        <CiSettings size={28} />
      </ButtonIcon>
      <ButtonIcon
        onClick={() => {
          openModal('confirm')
        }}
      >
        <CiLogout size={28} />
      </ButtonIcon>
      <Settings />
      <Modal elementID='confirm' title='logout' onConfirm={handleLogout}>
        are you sure to log out?
      </Modal>
    </header>
  )
}
export default Header
