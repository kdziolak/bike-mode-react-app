import React, { Component } from 'react';
import {connect} from 'react-redux'
import { sendIndexToDisplayValues } from '../actions/workoutSummaryActions' 
import {FormControl, Select, MenuItem, InputLabel} from '@material-ui/core'

class WorkoutSummarySelect extends Component {
  

  handleChangeSelect = e =>{
    this.props.measurementPoint.forEach((element, i) => {
     if(element.distance === e.target.value){
      this.props.sendIndexToDisplayValues(i) 
     }
    });
    
  }

  showOptions = (props, i) => {
    return(
      <MenuItem key={i} value={props.distance}>
        {props.distance} m
      </MenuItem>
    );
  }

   render(){
      return (
        <form>
         <FormControl style={{width: '100%'}}>
           <InputLabel>Kilometry</InputLabel>
           <Select 
            value={`${this.props.measurementPoint[this.props.index]}`}
            onChange={this.handleChangeSelect}
           >
             {this.props.measurementPoint.map(this.showOptions)}
           </Select>
         </FormControl>
         </form>
     );
}
}

const mapStateToProps = state => {
  return{
      measurementPoint: state.summaryWorkout.measurementPoint,
      index: state.summaryWorkout.index
  }
}
const mapDispatchToProps = dispatch => {
  return {
    sendIndexToDisplayValues: index => dispatch(sendIndexToDisplayValues(index))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutSummarySelect);
