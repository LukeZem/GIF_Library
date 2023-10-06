import React, { useContext, useEffect, useState } from 'react'
import { Button } from '@mui/material';
import './index.css'
import { Accordion, AccordionActions, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { primaryContext } from '../../contexts/primaryContext';
import { gifsContext } from '../../contexts/GIFsContext';
import { Link } from 'react-router-dom';
import { AccountCircleRounded } from '@mui/icons-material';

const HomePage = () => {

  const [text, setText] = useState("");
  const { userName, setUserName, isLoggedIn, setIsLoggedIn } = useContext(primaryContext);
  const { favs } = useContext(gifsContext);

  const getRandomIndex = (arr) => {
    return Math.floor(Math.random() * arr.length);
  }

  const handleLogin = () => {
    if (text.length === 0) {
      return;
    }
    // Check if user is already registered
    const storedName = localStorage.getItem('userName');
    if (storedName && storedName === text) {
      setIsLoggedIn(true);
      setUserName(text);
    } else {
      // New user: Update state and local storage
      setUserName(text);
      setIsLoggedIn(true);
      localStorage.setItem('userName', text);
    }
  };

  useEffect(() => {
    setText("");
  }, [userName])

  console.log("isLoggedIn:", isLoggedIn);
  console.log("userName:", userName);
  console.log("Single fav:", favs[0]);

  return (
    <div>
      <div id="header">
        {isLoggedIn ? <h1>Welcome Back {userName}</h1> : <h1>Login In</h1>}
      </div>
      <div id='login'>
        <input type="text" placeholder='Enter User Name...' value={text} onChange={(e) => setText(e.target.value)} />
        <Button
          variant="contained"
          color="success"
          onClick={handleLogin}>
          Login
        </Button>
      </div>
      {isLoggedIn && <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}>
            <Typography>{favs.length > 0 ? "Your Favorite Gif" : "You Got Nothin'"}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {favs.length > 0 ?
                <>
                  {console.log("Displaying a GIF")}
                  <img src={favs[getRandomIndex(favs)].images.fixed_height.url} alt="" />
                </>
                :
                <Link to="/search">
                  <div>Bro... dude... my guy... PICK A GIF!</div>
                </Link>}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>}

    </div>
  )
}

export default HomePage