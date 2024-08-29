import { CiLogout, CiMenuBurger, CiSettings } from 'react-icons/ci'

function Header({ toggleMenu, handleShowModal }) {
  return (
    <header className='header'>
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
    </header>
  )
}
export default Header
