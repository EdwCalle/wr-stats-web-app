import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/NavBar'
import Header from './components/Header'
import { useState } from 'react'
import StatsPage from './pages/StatsPage'
import Sheets from './pages/Sheets'
import 'normalize.css'
import './css/App.css'
function App() {
  const [isToggleMenu, setIsToggleMenu] = useState(false)

  const toggleMenu = () => {
    setIsToggleMenu(!isToggleMenu)
  }
  const handleShowModal = (id) => {
    document.getElementById(id).showModal()
  }
  return (
    <>
      <Header toggleMenu={toggleMenu} handleShowModal={handleShowModal} />
      <BrowserRouter>
        <Navbar isToggleMenu={isToggleMenu} />
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route
            path='/home'
            element={<Home handleShowModal={handleShowModal} />}
          ></Route>
          <Route path='/stats' element={<StatsPage />}></Route>
          <Route path='/sheets' element={<Sheets />}></Route>
          <Route path='*' element={<>404 not found page</>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
