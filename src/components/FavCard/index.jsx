import { useContext, useEffect, useState } from 'react'
import { gifsContext } from '../../contexts/GIFsContext'
import "./index.css"

const FavCard = () => {

    const { favs, setFavs } = useContext(gifsContext)
    const [selectedGifs, setSelectedGifs] = useState([]);

    const removeFav = (id) => {
        const newFavs = favs.filter(favGif => favGif.id !== id);
        setFavs(newFavs);
    };

    return (
        <>
            <h1>My Favorites</h1>
            <div id='fav-card'>

                {favs.map((favGif) => {
                    return (
                        <div key={favGif.id} className='fav-gif-card'>
                            <img onClick={() => removeFav(favGif.id)} src={favGif.images.fixed_height.url} alt={favGif.title} />
                        </div>
                    );
                })}

            </div>
        </>
    )
}

export default FavCard;