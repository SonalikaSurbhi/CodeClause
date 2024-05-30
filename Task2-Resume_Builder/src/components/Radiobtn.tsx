import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Radiobtn() {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel 
          value="Full Time" 
          control={<Radio sx={{ color: 'purple', '&.Mui-checked': { color: 'purple' } }} />} 
          label="Full Time" 
          name='selectWork'
        />
        <FormControlLabel 
          value="Internship" 
          control={<Radio sx={{ color: 'purple', '&.Mui-checked': { color: 'purple' } }} />} 
          label="Internship" 
          name='selectWork'
        />
        <FormControlLabel 
          value="Part Time" 
          control={<Radio sx={{ color: 'purple', '&.Mui-checked': { color: 'purple' } }} />} 
          label="Part Time" 
          name='selectWork'
        />
      </RadioGroup>
    </FormControl>
  );
}
