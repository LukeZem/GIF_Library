import { createContext, useContext, useState } from "react";

export const gifsContext = createContext();

export const GIFsProvider = (props) => {
    // const [query, setQuery] = useState('');
    const [gifs, setGifs] = useState([]);



    return (<gifsContext.Provider value={
        {
            // query,
            // setQuery,
            gifs,
            setGifs,
        }
    }>
        {props.children}
    </gifsContext.Provider>)
}