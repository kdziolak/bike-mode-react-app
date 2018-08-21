import React, { Component } from 'react';
import { connect } from 'react-redux'
import {FormGroup, FormControl,FormControlLabel, Radio, RadioGroup, InputLabel, Select, MenuItem} from '@material-ui/core';
import { getDataFromDatabase, clearDataAfterUnmount } from '../../actions/workoutsResultsActions'
import { postDateValue, postTripDataValue } from '../../actions/filterDataActions'


class WorkoutsResultsSettings extends Component {
    constructor(){
        super();
        this.state = {
            lastData: '',
            dataToFilter: {
                radioValue: 'speed',
                dateValue: 'allDates'
            },
            dateValue: ''
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
            dataToFilter: {
                radioValue: e.target.value,
            }
        })
        this.props.postTripDataValue(e.target.value)
    }

    dateChange = e => {
        this.setState({
            dataToFilter: {
                dateValue: e.target.value,
            }
        })
        this.props.postDateValue(e.target.value)
    }

    changeWorkoutData = () => {
        this.setState({
            updateView: true
        })
    }

    showDate = (props, i) =>{
        if (i === 0){
            dateValue = props.dateWorkout.date
            return <MenuItem key={i} value={"allDates"}>wszystkie dni</MenuItem>;
        } 
        return(
            <MenuItem key={i} value={props.dateWorkout.date}>dzień: {props.dateWorkout.date}</MenuItem>
        );

    }

    // showOptions = (props, i) =>{
    //     let bool = false
    //     let elem = [];
    //     let x = props.tripMeasurementPoints;
    //     if(Array.isArray(x)){
    //         x.map(el => {
    //             if(this.state.radioValue === 'time'){
    //                 if(props.dateWorkout.date === this.state.dateValue){
    //                     bool = true;
    //                    elem = [...elem, el.time]
    //                 }
    //             } else if(this.state.radioValue === 'speed') {
    //                 if(props.dateWorkout.date === this.state.dateValue){
    //                     bool = true;
    //                    elem = [...elem, el.averageSpeed]
    //                 }
    //             }   else if(this.state.radioValue === 'distance') {
    //                 if(props.dateWorkout.date === this.state.dateValue){
    //                     bool = true;
    //                    elem = [...elem, el.averageSpeed]
    //                 }
    //             }
    //         })
    //     }
    //     if(bool){
    //         return(
    //             <FormControl key={i}>
    //                 <InputLabel >
    //                     {(()=>{
    //                         if(this.state.radioValue === 'speed') return 'Prędkość'
    //                         else if(this.state.radioValue === 'time') return 'Czas'
    //                         else if(this.state.radioValue === 'distance') return 'Dystans'                  
    //                     })()}
    //                 </InputLabel>
    //                 <Select>
    //                     {
    //                         elem.map(el => <MenuItem>{el}</MenuItem>)
    //                     }
    //                 </Select>
    //             </FormControl>
    //         )
    //     }
    // }

  render() {
    return (
        <div>
            <FormGroup >
                <FormControl>
                    <InputLabel >
                        Data treningu
                    </InputLabel>
                    <Select
                        className="select-date"
                        value={this.props.date} 
                        onChange={this.dateChange}>
                        {this.props.workoutsData.map(this.showDate)}
                    </Select>
                </FormControl>
            </FormGroup>
            <br/>  
            <FormGroup>
                <FormControl>
                    <RadioGroup style={{display: 'flex', flexDirection: 'row'}}
                        value={this.props.tripData}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel value='speed' control={<Radio/>} label="Prędkość"/>
                        <FormControlLabel value='time' control={<Radio/>} label="Czas"/>
                        <FormControlLabel value='distance' control={<Radio/>} label="Dystans"/>
                    </RadioGroup>
                </FormControl>

                {/* show select options */}
                {/* {this.props.workoutsData.map(this.showOptions)} */}
            </FormGroup>
        </div>
        
    );
  }
}

const mapStateToProps = state => {
    return{
        workoutsData: state.resultsWorkout,
        date: state.filterData.dateValue,
        tripData: state.filterData.tripData
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
        getDataFromDatabase: () => dispatch(getDataFromDatabase()),
        clearDataAfterUnmount: () => dispatch(clearDataAfterUnmount()),
        postDateValue: date => dispatch(postDateValue(date)),
        postTripDataValue: trip => dispatch(postTripDataValue(trip))
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsResultsSettings);
