import React, { useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Footer from './components/Footer';
import Home from './pages/Home';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import "./App.css"
import { gifsContext } from './contexts/GIFsContext';



function App() {

  const { query, setQuery, gifs, setGifs } = useContext(gifsContext)


  return (
    <>
      <CssBaseline />
      
      <div id="main-container">
        
        <AppBar position="fixed">
          <Toolbar>
            <Button color="inherit" component={RouterLink} to="/" startIcon={<HomeIcon />}>
              Home
            </Button>
            <Button color="inherit" component={RouterLink} to="/search" startIcon={<SearchIcon />}>
              Search
            </Button>
            <Button color="inherit" component={RouterLink} to="/favorites" startIcon={<FavoriteIcon />}>
              Favorites
            </Button>
          </Toolbar>
        </AppBar>

        <div id="content-container">
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </Container>
        </div>

        <div id="footer">
          <Footer />
        </div>

      </div>
    </>
  );
}

export default App;
