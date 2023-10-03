import React, { useContext } from 'react'
import Navbar from '../Navbar'
import { gifsContext } from '../../contexts/GIFsContext'


const SearchBar = () => {

  const { query, setQuery, setGifs } = useContext(gifsContext)

  return (
    <div>
      <h1>Search For a GIF</h1>
      <input type="text" placeholder='search gifs...' />
    </div>
  )
}

export default SearchBar