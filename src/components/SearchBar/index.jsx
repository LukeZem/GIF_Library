import React, { useContext, useEffect, useState } from 'react';
import { gifsContext } from '../../contexts/GIFsContext';
import axios from 'axios';
import Button from '@mui/material/Button';
import { primaryContext } from '../../contexts/primaryContext';
import "./index.css"


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
      setGifs(response.data.data); //populating gifs array with response from GIPHY API
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
    setPrevSearch(input) //saving the input before reseting it
    setInput(""); //reseting the input to empty
  }
  console.log("testing gifs array", gifs); //checking gifs array

  //making sure next and prev buttons work for offset of GIFS
  useEffect(() => {
    searchGIFs(true);
  }, [offset])


  return (
    <div>

      <div id="search-container">
        <h1>Search For YOUR GIF</h1>
        <div id="search-bar">
          <input
            id='input-bar'
            type="text"
            placeholder="Search GIFs..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => handleSubmit()} >
            Submit
          </Button>
        </div>
        <Button
          id='next-btn'
          variant="contained"
          color="success"
          onClick={() => {
            setOffset(offset + 10);
          }}>
          Next
        </Button>
        <Button
          id='prev-btn'
          variant="contained"
          color="success"
          onClick={() => {
            setOffset(offset - 10);
          }}>
          Previous
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
