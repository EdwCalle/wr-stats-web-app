import Loader from '@components/Loader/Loader'
import 'normalize.css'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import { AuthProvider } from './context/AuthContext'
// import HomePage from './pages/private/Home/HomePage'
// import MatchesPage from './pages/private/Matches/MatchesPage'
// import StatsPage from './pages/private/Stats/StatsPage'
// import UserProfile from './pages/private/UserProfile'
// import GuestProfile from './pages/public/GuestProfile'
// import LandingPage from './pages/public/LandingPage'
// import LoginPage from './pages/public/LoginPage'
// import RegisterPage from './pages/public/RegisterPage'
const HomePage = lazy(() => import('./pages/private/Home/HomePage'))
const MatchesPage = lazy(() => import('./pages/private/Matches/MatchesPage'))
const StatsPage = lazy(() => import('./pages/private/Stats/StatsPage'))
const UserProfile = lazy(() => import('./pages/private/UserProfile'))
const GuestProfile = lazy(() => import('./pages/public/GuestProfile'))
const LandingPage = lazy(() => import('./pages/public/LandingPage'))
const LoginPage = lazy(() => import('./pages/public/LoginPage'))
const RegisterPage = lazy(() => import('./pages/public/RegisterPage'))
function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback={<Loader label='lazy load...' />}>
            <Routes>
              <Route element={<GuestProfile />}>
                <Route index element={<LandingPage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='signup' element={<RegisterPage />} />
                <Route path='*' element={<>404 not found page</>} />
              </Route>
              <Route path='player' element={<Navigate to='/player/home' />} />
              <Route path='player/*' element={<UserProfile />}>
                <Route path='home' element={<HomePage />} />
                <Route path='stats' element={<StatsPage />} />
                <Route path='matches' element={<MatchesPage />} />
                <Route path='*' element={<>404 not found page</>} />
              </Route>
              <Route path='*' element={<>404 not found page</>} />
            </Routes>
          </Suspense>
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
