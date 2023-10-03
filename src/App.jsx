import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Favorites from './pages/Favorites'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {


  return (
    <div>
      <div id="header">
        <Header />
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
