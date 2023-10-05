import React, { useContext } from 'react'
import { gifsContext } from '../../contexts/GIFsContext';



const FavoritesPage = () => {

  const { favs } = useContext(gifsContext);

  return (
    <div>
      <h1>My Library</h1>
      {favs.map((favGif) => {
        return <img key={favGif.id} src={favGif.images.fixed_height.url} alt={favGif.title} />
      })}
    </div>
  )
}

export default FavoritesPage