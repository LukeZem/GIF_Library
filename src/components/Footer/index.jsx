import { Container, Typography, Box } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      // prop of MUI to apply in-line CSS styling
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        position: 'fixed',
        width: '100vw',
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Container>
        <Typography variant="h6">
          All GIFs provided by GIPHY
        </Typography>
        <Typography variant="body2">
          All rights reserved © {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
