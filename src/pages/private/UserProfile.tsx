import useAuth from '@/context/AuthContext'
import Header from '@components/Layout/Header/Header'
import Navbar from '@components/Layout/NavBar/Navbar'
import { Navigate, Outlet } from 'react-router-dom'

function UserProfile() {
  const { currentUser, isLoading } = useAuth()
  if (isLoading) return <div>its loading.....</div>
  if (!currentUser && !isLoading) return <Navigate to={'../'} replace />
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
