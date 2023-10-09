import { useContext, useEffect, useState } from 'react'
import { gifsContext } from '../../contexts/GIFsContext'
import "./index.css"

const GifCard = () => {

    const { gifs, favs, setFavs } = useContext(gifsContext)
    const [selectedGifs, setSelectedGifs] = useState([]);

    const saveFav = (clickedGif) => {
        setFavs(prevFavs => [...prevFavs, clickedGif]);
    };

    //local storage
    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(favs));
        console.log("updated favs:", favs);
    }, [favs]);

    return (
        <div id="gif-card">
            {gifs.map((gif) => {
                return <img onClick={() => saveFav(gif)}
                    key={gif.id}
                    src={gif.images.fixed_height.url}
                    alt={gif.title} />
            })}
        </div>
    )
}

export default GifCard;