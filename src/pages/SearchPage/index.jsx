import React from 'react'
import SearchBar from '../../components/SearchBar'
import GifCard from '../../components/GifCard'

const SearchPage = () => {
  return (
    <div>
      <SearchBar />
      <div>
        <GifCard />
      </div>
    </div>
  )
}

export default SearchPage