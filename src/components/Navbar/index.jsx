import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to={"/"}>
            <button>Home</button>
        </Link>
        <Link to={"/search"}>
            <button>Search For Your GIF</button>
        </Link>
        <Link to={"/favorites"}>
            <button>Library</button>
        </Link>
    </div>
  )
}

export default Navbar