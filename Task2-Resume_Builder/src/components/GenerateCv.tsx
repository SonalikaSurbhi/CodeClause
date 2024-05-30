import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function FloatingActionButtons() {
  return (
    <Box sx={{  marginLeft: '70px',marginTop:'5px'}}>
      <Fab
        variant="extended"
        sx={{
          m: 2, // Margin
          backgroundColor: 'purple', // Background color
          color: 'white', // Text color
          '&:hover': {
            backgroundColor: 'secondary.dark', // Background color on hover
          },
        }}
      >
        Generate CV
      </Fab>
    </Box>
  );
}
