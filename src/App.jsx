import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Menu }  from './pages'
import { Navbar } from './components'

const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </Router>
  )
}

export default App
