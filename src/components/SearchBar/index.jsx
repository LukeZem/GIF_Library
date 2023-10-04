import React, { useContext, useEffect, useState } from 'react';
import { gifsContext } from '../../contexts/GIFsContext';
import axios from 'axios';
import Button from '@mui/material/Button';
import { primaryContext } from '../../contexts/primaryContext';
import "./index.css"
import GifCard from '../GifCard';

const apiKey = import.meta.env.VITE_GIPHY_KEY;
// const giphy = new GiphyFetch(apiKey)


const SearchBar = () => {
  const { gifs, setGifs } = useContext(gifsContext);
  const { input, setInput, err, setErr, offset, setOffset } = useContext(primaryContext);
  const [prevSearch, setPrevSearch] = useState("");


  const searchGIFs = async (isNext) => {
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${isNext ? prevSearch : input}&limit=10&offset=${offset}&rating=r&lang=en`
      );
      console.log(response); //checking api endpoint response

      setGifs(response.data.data);


    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };


  const handleSubmit = () => {
    if (input.length === 0) {
      //set error state to true
      setErr(true)
      return
    }
    console.log(input)
    searchGIFs();
    setPrevSearch(input)
    setInput("");
  }
  console.log("testing gifs array", gifs); //checking gifs array


  useEffect(() => {
    searchGIFs(true);
  }, [offset])


  return (
    <div>

      <div id="search-container">
        <h1>Search For a GIF</h1>
        <input
          type="text"
          placeholder="Search GIFs..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="contained"
          onClick={() => handleSubmit()} >
          Submit
        </Button>
        <Button variant="contained"
          onClick={() => {
            setOffset(offset + 10);
          }}>
          Next
        </Button>
        <Button variant="contained"
          onClick={() => {
            setOffset(offset - 10);
          }}>
          Previous
        </Button>
        <GifCard />
      </div>
    </div>
  );
};

export default SearchBar;
