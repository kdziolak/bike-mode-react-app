import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Redirect } from 'react-router-dom'
import { sendIndexToDisplayValues } from '../../actions/workoutSummaryActions' 
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
    if(this.props.measurementPoint == false){
      return(
          <Redirect to='/rozpocznij-trening' />
      )
    }
      return (
        <form>
         <FormControl style={{width: '100%'}}>
           <InputLabel>Kilometry</InputLabel>
           <Select 
            value={this.props.measurementPoint[this.props.index].distance}
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
