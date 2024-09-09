import Header from '@/components/Layout/Header'
import Navbar from '@/components/Layout/Navbar'
import { Outlet } from 'react-router-dom'

function UserProfile() {
  return (
    <div className='body'>
      {/* the div sytles come from App.css */}
      <Header />
      <Navbar />
      <Outlet />
      {/* this outlet is the pages */}
    </div>
  )
}
export default UserProfile
