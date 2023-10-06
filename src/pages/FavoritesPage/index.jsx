import React, { useContext } from 'react'
import { gifsContext } from '../../contexts/GIFsContext';
import "./index.css"



const FavoritesPage = () => {
  const { favs } = useContext(gifsContext);

  return (
    <div>
      <h1>My Favorites</h1>
      <div id="fav-container">
        {favs.map((favGif) => {
          return (
            <div key={favGif.id} className='fav-gif-card'>
              <img src={favGif.images.fixed_height.url} alt={favGif.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}


export default FavoritesPage