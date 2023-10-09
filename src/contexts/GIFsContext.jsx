import { createContext, useContext, useState } from "react";

export const gifsContext = createContext();

export const GIFsProvider = (props) => {
    // const [query, setQuery] = useState('');
    const [gifs, setGifs] = useState([]);
    const [favs, setFavs] = useState(() => {
        const storedFavs = localStorage.getItem('favs');
        return storedFavs ? JSON.parse(storedFavs) : [];
    });




    return (<gifsContext.Provider value={
        {
            gifs,
            setGifs,
            favs,
            setFavs
        }
    }>
        {props.children}
    </gifsContext.Provider>)
}