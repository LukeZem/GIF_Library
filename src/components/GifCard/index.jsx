import { useContext } from 'react'
import { gifsContext } from '../../contexts/GIFsContext'
import "./index.css"

const GifCard = () => {

    const { gifs } = useContext(gifsContext)

    return (
        <div id="gif-card">
            {gifs.map((gif) => {
                return <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
            })}
        </div>
    )
}

export default GifCard;