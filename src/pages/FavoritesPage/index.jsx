import React, { useContext } from 'react'
import { gifsContext } from '../../contexts/GIFsContext';
import "./index.css"



const FavoritesPage = () => {
  const { favs, setFavs } = useContext(gifsContext); // Make sure you have a setFavs method in your gifsContext

  const removeFav = (id, indexToRemove) => {
    const newFavs = favs.filter((favGif, index) => favGif.id !== id || index !== indexToRemove);
    setFavs(newFavs);
  };


  return (
    <div id='container'>
      <h1>My Favorites</h1>
      <div id="fav-container">
        {favs.map((favGif, index) => {
          return (
            <div key={favGif.id + index} className='fav-gif-card'>
              <img onClick={() => removeFav(favGif.id, index)} src={favGif.images.fixed_height.url} alt={favGif.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}



export default FavoritesPage;