import 'normalize.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import { AuthProvider } from './context/AuthContext'
import MatchProvider from './context/MatchContext'
import HomePage from './pages/private/Home/HomePage'
import MatchesPage from './pages/private/Matches/MatchesPage'
import StatsPage from './pages/private/Stats/StatsPage'
import UserProfile from './pages/private/UserProfile'
import LandingPage from './pages/public/LandingPage'
import LoginPage from './pages/public/LoginPage'
import RegisterPage from './pages/public/RegisterPage'

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />

            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />

            <Route path='/player' element={<Navigate to='/player/home' />} />
            <Route path='/player/*' element={<UserProfile />}>
              <Route
                path='home'
                element={
                  <MatchProvider>
                    <HomePage />
                  </MatchProvider>
                }
              />
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
