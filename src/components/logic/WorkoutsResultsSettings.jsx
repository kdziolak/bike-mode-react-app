import React, { Component } from 'react';
import { connect } from 'react-redux'
import {FormGroup, FormControl,FormControlLabel, Radio, RadioGroup, InputLabel, Select, MenuItem} from '@material-ui/core';
import { getDataFromDatabase, clearDataAfterUnmount, postDateValue } from '../../actions/workoutsResultsActions'

class WorkoutsResultsSettings extends Component {
    constructor(){
        super();
        this.state = {
            radioValue: 'speed',
            lastData: '',
            dateValue: '',
            value: null
        }
    }
    componentDidMount(){
        this.props.getDataFromDatabase()
    }
    componentWillUnmount() {
        this.props.clearDataAfterUnmount()
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
        this.props.postDateValue(e.target.value)
    }

    changeWorkoutData = () => {
        this.setState({
            updateView: true
        })
    }

    showDate = (props, i) =>{
        return(
            <MenuItem key={i} value={props.dateWorkout.date}>dzień: {props.dateWorkout.date}, godzina: {props.dateWorkout.time}</MenuItem>
        );
    }
    showOptions = (props, i) =>{
        let bool = false
        let elem = [];
        let x = props.tripMeasurementPoints;
        if(Array.isArray(x)){
            x.map(el => {
                if(this.state.radioValue === 'time'){
                    if(props.dateWorkout.date === this.state.dateValue){
                        bool = true;
                       elem = [...elem, el.time]
                    }
                } else if(this.state.radioValue === 'speed') {
                    if(props.dateWorkout.date === this.state.dateValue){
                        bool = true;
                       elem = [...elem, el.averageSpeed]
                    }
                }   else if(this.state.radioValue === 'distance') {
                    if(props.dateWorkout.date === this.state.dateValue){
                        bool = true;
                       elem = [...elem, el.averageSpeed]
                    }
                }
            })
        }
        if(bool){
            return(
                <FormControl key={i}>
                    <InputLabel >
                        {(()=>{
                            if(this.state.radioValue === 'speed') return 'Prędkość'
                            else if(this.state.radioValue === 'time') return 'Czas'
                            else if(this.state.radioValue === 'distance') return 'Dystans'                  
                        })()}
                    </InputLabel>
                    <Select>
                        {
                            elem.map(el => <MenuItem>{el}</MenuItem>)
                        }
                    </Select>
                </FormControl>
            )
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
                    <FormControlLabel value='distance' control={<Radio/>} label="Dystans"/>
                </RadioGroup>
            </FormControl>

            {/* show select options */}
            {this.props.workoutsData.map(this.showOptions)}

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
        getDataFromDatabase: () => dispatch(getDataFromDatabase()),
        clearDataAfterUnmount: () => dispatch(clearDataAfterUnmount()),
        postDateValue: date => dispatch(postDateValue(date))
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsResultsSettings);
