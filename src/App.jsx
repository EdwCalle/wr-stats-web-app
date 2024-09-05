import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import PlayerPage from './pages/PlayerPage'
import Home from './pages/Home'
import StatsPage from './pages/StatsPage'
import Sheets from './pages/Sheets'
import 'normalize.css'
import './css/App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/landingPage' element={<LandingPage />}></Route>
          <Route path='/' element={<Navigate to='/landingPage' />} />
          <Route path='/player' element={<Navigate to='/player/home' />} />
          <Route path='/player/*' element={<PlayerPage />}>
            <Route path='home' element={<Home />}></Route>
            <Route path='stats' element={<StatsPage />}></Route>
            <Route path='sheets' element={<Sheets />}></Route>
            <Route path='*' element={<>404 not found page</>}></Route>
          </Route>
          <Route path='*' element={<>404 not found page</>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
