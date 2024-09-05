import { useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function PlayerPage() {
  const [isToggleMenu, setIsToggleMenu] = useState(false)
  const toggleMenu = () => {
    setIsToggleMenu(!isToggleMenu)
  }
  return (
    <div className='body' role='body'>
      <>
        <Header toggleMenu={toggleMenu} />
        <Navbar isToggleMenu={isToggleMenu} />
        <Outlet />
      </>
    </div>
  )
}
export default PlayerPage
