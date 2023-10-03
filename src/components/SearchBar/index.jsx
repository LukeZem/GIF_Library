import React, { useContext, useEffect, useState } from 'react';
import { gifsContext } from '../../contexts/GIFsContext';
import axios from 'axios';
import Button from '@mui/material/Button';
import { primaryContext } from '../../contexts/primaryContext';

// import { GiphyFetch } from "@giphy/js-fetch-api"

const apiKey = import.meta.env.VITE_GIPHY_KEY;
// const giphy = new GiphyFetch(apiKey)


const SearchBar = () => {
  const { query, setQuery, gifs, setGifs } = useContext(gifsContext);
  const { input, setInput, err, setErr } = useContext(primaryContext);

  const handleSubmit = () => {
    if (input.length === 0) {
      //set error state to true
      setErr(true)
      return
    }
    console.log(input)

    const searchGIFs = async () => {
      try {
        const response = await axios.get(
          `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${input}&limit=10&offset=0&rating=r&lang=en`
        );
        console.log(response);
        setGifs(response.data.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    searchGIFs();


  }
  return (
    <div>
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
    </div>
  );
};

export default SearchBar;
