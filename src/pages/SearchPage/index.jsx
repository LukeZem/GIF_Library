import React from 'react'
import SearchBar from '../../components/SearchBar'
import GifCard from '../../components/GifCard'
import './index.css'

const SearchPage = () => {
  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <div id="gif-cards">
        <GifCard />
      </div>
    </div>
  )
}

export default SearchPage