import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function AddBtn() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } , marginLeft: '120px'}}>
      <Fab size="small" color="secondary" aria-label="add" sx={{ width: '40px', height: '40px' }}>
        <AddIcon />
      </Fab>
      
    </Box>
  );
}









