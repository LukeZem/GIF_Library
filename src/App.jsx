import React, { useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import CssBaseline from '@mui/material/CssBaseline';
// import Container from '@mui/material/Container';
// import AppBar from '@mui/material/AppBar';
import { Toolbar, AppBar, Container, CssBaseline, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
// import Button from '@mui/material/Button';
import { Home, Search, Favorite } from "@mui/icons-material";
// import HomeIcon from '@mui/icons-material/Home';
// import SearchIcon from '@mui/icons-material/Search';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import FavoritesPage from './pages/FavoritesPage';
import "./App.css"
import { gifsContext } from './contexts/GIFsContext';
import { primaryContext } from './contexts/primaryContext';
import InstructionsModal from './components/InstructionsModal';




function App() {

  const { userName, isLoggedIn } = useContext(primaryContext);
  const { query, setQuery, gifs, setGifs } = useContext(gifsContext);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <CssBaseline />

      <div id="main-container">

        <AppBar position="fixed">
          <Toolbar> {/*flex box container provided by MUI*/}
            <Button color="inherit" component={RouterLink} to="/" startIcon={<Home />}>
              Home
            </Button>
            <Button color="inherit" component={RouterLink} to="/search" startIcon={<Search />}>
              Search
            </Button>
            <Button color="inherit" component={RouterLink} to="/favorites" startIcon={<Favorite />}>
              Favorites
            </Button>
            <Button variant="contained" onClick={handleOpen}>
              Show Instructions
            </Button>
            <InstructionsModal open={open} handleClose={handleClose} />
          </Toolbar>
        </AppBar>

        <div id="content-container">
          <Container>
            <div id='content-coloring'>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />

              </Routes>
            </div>
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
