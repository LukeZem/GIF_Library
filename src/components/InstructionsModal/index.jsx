import React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function InstructionsModal({ open, handleClose }) {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography variant="h6" component="h2">
                        <h4>Instructions</h4>
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        1: Use the search bar to enter any word or phrase to generate GIFs <br />
                        2: You can click next to show more GIFs related to your query <br />
                        3: You can click previous to return to the last list of GIFs <br />
                        4: Click on a gif to add it to your favorites page <br />
                        5: In the favorites page, if you would like to remove a GIF, simply click on that GIF
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default InstructionsModal;