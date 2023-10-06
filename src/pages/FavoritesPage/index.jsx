import React, { useContext } from 'react'
import { gifsContext } from '../../contexts/GIFsContext';
import "./index.css"



const FavoritesPage = () => {

  const { favs } = useContext(gifsContext);

  return (
    <div id="fav-container">
      <h1>My Favorites</h1>
      {favs.map((favGif) => {
        return <div key={favGif.id} id='fav-gif-card'>
          <img src={favGif.images.fixed_height.url} alt={favGif.title} />
        </div>
      })}
    </div>
  )
}

export default FavoritesPage