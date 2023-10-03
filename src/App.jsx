import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Favorites from './pages/Favorites'

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Favorites" element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App
