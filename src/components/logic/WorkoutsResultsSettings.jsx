import React, { Component } from 'react';
import { connect } from 'react-redux'
import {FormGroup, FormControl,FormControlLabel, Radio, RadioGroup, InputLabel, Select} from '@material-ui/core';
import { getDataFromDatabase } from '../../actions/workoutsResultsActions'

class WorkoutsResultsSettings extends Component {
    constructor(){
        super();
        this.state = {
            radioValue: 'speed',
            lastData: ''
        }
    }

    componentDidMount(){
        this.props.getDataFromDatabase()
    }

    handleChange = e => {
        this.setState({
            radioValue: e.target.value
        })
    }
    showOptions = (props, i) =>{
        if(this.state.radioValue === 'speed') return(<option value={props.tripMeasurementPoints.averageSpeed}>{props.tripMeasurementPoints.averageSpeed}</option>)
        else if(this.state.radioValue === 'time') return 'Czas'
        else if(this.state.radioValue === 'distanc') return 'Dystans'
        else if(this.state.radioValue === 'workoutDate'){
            if(i >= 0){
                console.log(props.dateWorkout.date !== this.props.workoutsData[--i].dateWorkout.date)
            }
            return(<option value={props.dateWorkout.date}>{props.dateWorkout.date}</option>)
        } 
        else if(this.state.radioValue === 'workoutTimeEnd') return 'Godzina treningu'
    }
  render() {
    return (
        <FormGroup >
            <FormControl>
                <RadioGroup style={{display: 'flex', flexDirection: 'row'}}
                    value={this.state.radioValue}
                    onChange={this.handleChange}
                >
                    <FormControlLabel value='speed' control={<Radio/>} label="Prędkość"/>
                    <FormControlLabel value='time' control={<Radio/>} label="Czas"/>
                    <FormControlLabel value='distanc' control={<Radio/>} label="Dystans"/>
                    <FormControlLabel value='workoutDate' control={<Radio/>} label="Data treningu"/>
                    <FormControlLabel value='workoutTimeEnd' control={<Radio/>} label="Godzina treningu"/>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <InputLabel >
                    {(()=>{
                        if(this.state.radioValue === 'speed') return 'Prędkość'
                        else if(this.state.radioValue === 'time') return 'Czas'
                        else if(this.state.radioValue === 'distanc') return 'Dystans'
                        else if(this.state.radioValue === 'workoutDate') return 'Data treningu'
                        else if(this.state.radioValue === 'workoutTimeEnd') return 'Godzina treningu'                    
                    })()}
                </InputLabel>
                <Select>
                    {this.props.workoutsData.map(this.showOptions)}
                </Select>
            </FormControl>
        </FormGroup>
    );
  }
}

const mapStateToProps = state => {
    return{
        workoutsData: state.resultsWorkout
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
        getDataFromDatabase: () => dispatch(getDataFromDatabase())
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsResultsSettings);
