import React, { Component } from 'react';
import { connect } from 'react-redux'
import {FormGroup, FormControl,FormControlLabel, Radio, RadioGroup, InputLabel, Select, MenuItem} from '@material-ui/core';
import { getDataFromDatabase } from '../../actions/workoutsResultsActions'

class WorkoutsResultsSettings extends Component {
    constructor(){
        super();
        this.state = {
            radioValue: 'speed',
            lastData: '',
            dateValue: ''
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

    dateChange = e => {
        this.setState({
            dateValue: e.target.value
        })
    }

    showDate = (props, i) =>{
        return(
            <MenuItem value={props.dateWorkout.date}>dzień: {props.dateWorkout.date}, godzina: {props.dateWorkout.time}</MenuItem>
        );
    }
    showOptions = (props, i) =>{
        let x = props.tripMeasurementPoints;
        if(Array.isArray(x)){
            x.map(el => {
                if(this.state.radioValue === 'speed'){
                    if(props.dateWorkout.date === this.state.dateValue){
                        console.log(el.averageSpeed)
                        return(
                            <MenuItem value={el.averageSpeed}>
                                {el.averageSpeed}
                            </MenuItem>
                        );
                    }
                }
            })
        }
    }
  render() {
    return (
        <FormGroup >
            <FormControl>
                <InputLabel >
                    Data treningu
                </InputLabel>
                <Select
                    value={this.state.dateValue} 
                    onChange={this.dateChange}>
                    {this.props.workoutsData.map(this.showDate)}
                </Select>
            </FormControl>
            <br/>
            <FormControl>
                <RadioGroup style={{display: 'flex', flexDirection: 'row'}}
                    value={this.state.radioValue}
                    onChange={this.handleChange}
                >
                    <FormControlLabel value='speed' control={<Radio/>} label="Prędkość"/>
                    <FormControlLabel value='time' control={<Radio/>} label="Czas"/>
                    <FormControlLabel value='distanc' control={<Radio/>} label="Dystans"/>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <InputLabel >
                    {(()=>{
                        if(this.state.radioValue === 'speed') return 'Prędkość'
                        else if(this.state.radioValue === 'time') return 'Czas'
                        else if(this.state.radioValue === 'distanc') return 'Dystans'                  
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
