import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/public/LandingPage'
import UserProfile from './pages/private/UserProfile'
import HomePage from './pages/private/Home/HomePage'
import StatsPage from './pages/private/Stats/StatsPage'
import MatchesPage from './pages/private/Matches/MatchesPage'
import 'normalize.css'
import './App.css'
import { AuthProvider } from './context/AuthContext'
import RegisterPage from './pages/public/RegisterPage'
import LoginPage from './pages/public/LoginPage'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      {' '}
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />

            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />

            <Route path='/player' element={<Navigate to='/player/home' />} />
            <Route path='/player/*' element={<UserProfile />}>
              <Route path='home' element={<HomePage />} />
              <Route path='stats' element={<StatsPage />} />
              <Route path='matches' element={<MatchesPage />} />
              <Route path='*' element={<>404 not found page</>} />
            </Route>

            <Route path='*' element={<>404 not found page</>} />
          </Routes>
        </BrowserRouter>
        <ToastContainer
          position='bottom-center'
          theme='colored'
          pauseOnHover={false}
        />
      </AuthProvider>
    </>
  )
}

export default App
