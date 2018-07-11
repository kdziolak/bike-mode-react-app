import React, { Component } from 'react';
import {FormControl, Select, MenuItem, InputLabel} from '@material-ui/core'

class WorkoutSummarySelect extends Component {
   render(){
    return (
       <form>
        <FormControl style={{width: '100%'}}>
          <InputLabel>Kilometry</InputLabel>
          <Select
          >
            <MenuItem value="">
              <em>Cała trasa</em>
            </MenuItem>
            <MenuItem value={1}>1 km</MenuItem>
            <MenuItem value={2}>2 km</MenuItem>
            <MenuItem value={3}>3 km</MenuItem>
          </Select>
        </FormControl>
        </form>
    );
  }
}

export default WorkoutSummarySelect;
