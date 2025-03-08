import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingProfile/LandingPage'
import UserProfile from './pages/NormalUser/UserProfile'
import HomePage from './pages/NormalUser/Home/HomePage'
import StatsPage from './pages/NormalUser/Stats/StatsPage'
import MatchesPage from './pages/NormalUser/Matches/MatchesPage'
import 'normalize.css'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/landingPage' element={<LandingPage />}></Route>
          <Route path='/' element={<Navigate to='/landingPage' />} />
          <Route path='/player' element={<Navigate to='/player/home' />} />
          <Route path='/player/*' element={<UserProfile />}>
            <Route path='home' element={<HomePage />}></Route>
            <Route path='stats' element={<StatsPage />}></Route>
            <Route path='sheets' element={<MatchesPage />}></Route>
            <Route path='*' element={<>404 not found page</>}></Route>
          </Route>
          <Route path='*' element={<>404 not found page</>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
