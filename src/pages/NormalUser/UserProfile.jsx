import Header from '@/components/Layout/Header'
import Navbar from '@/components/Layout/Navbar'
import { Outlet } from 'react-router-dom'

function UserProfile() {
  // const [isToggleMenu, setIsToggleMenu] = useState(false)
  // const toggleMenu = () => {
  //   setIsToggleMenu(!isToggleMenu)
  // }
  return (
    <div className='body' role='body'>
      <>
        <Header />
        <Navbar />
        <Outlet />
      </>
    </div>
  )
}
export default UserProfile
