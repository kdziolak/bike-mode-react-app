import React, { Component } from 'react';
import {FormControl, Select, MenuItem, InputLabel} from '@material-ui/core'

class WorkoutSummarySelect extends Component {
   render(){
    return (
       <form autoComplete="off">
        <FormControl>
          <InputLabel htmlFor="age-simple">Kilometers</InputLabel>
          <Select
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        </form>
    );
  }
}

export default WorkoutSummarySelect;
