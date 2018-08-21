import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getDataFromDatabase,clearDataAfterUnmount } from '../../actions/workoutsResultsActions'
import {Table, TableBody, TableCell, TableRow, TableHead, Paper, CircularProgress} from '@material-ui/core';
import {Redirect} from 'react-router-dom';

class WorkoutsResultsTable extends Component {
    constructor(){
        super();
        this.state ={
            tripId: '',
            redirect: false
        }
        
    }
    componentWillMount(){
        this.props.clearDataAfterUnmount();
        this.props.getDataFromDatabase();
    }
    componentWillUnmount() {
        this.props.clearDataAfterUnmount();
    }


    handleClick = (e) => {
        this.props.workoutsData.map(el => {
            if(e.target.classList.contains(el.tripId)){
                this.setState({
                    tripID: el.tripId,
                    redirect: true
                })
            }
        })
        
    }


    showTableRows = (props, i) => {

        let time, speed, distance;

        if(Array.isArray(props.tripMeasurementPoints)){
            props.tripMeasurementPoints.map(el => {
                if(this.props.tripData === 'time'){
                    time =  props.tripMeasurementPoints[props.tripMeasurementPoints.length-1].time;
                    return;
                }
                else if(this.props.tripData === 'speed'){
                    speed =  props.tripMeasurementPoints[props.tripMeasurementPoints.length-1].averageSpeed;
                    return;
                }
                else if(this.props.tripData === 'distance'){
                    distance =  props.tripMeasurementPoints[props.tripMeasurementPoints.length-1].distance;
                    return;
                }
            })
        }
        

        if(this.props.dateValue === 'allDates' && props.dateWorkout.date !== undefined){
            return (
                <TableRow key={i} className={props.tripId} onClick={this.handleClick}>
                    <TableCell className={props.tripId}>
                        {props.dateWorkout.date}
                    </TableCell>
                    <TableCell className={props.tripId}>
                        {
                            (()=>{
                                if(this.props.tripData === 'speed') return speed;
                                else if(this.props.tripData === 'time') return time;
                                else if(this.props.tripData === 'distance') return distance;                  
                            })()
                        }
                    </TableCell>
                    {this.state.redirect ? <Redirect to={`/wyniki-treningow/trening/${this.state.tripID}`} /> : null}
                </TableRow>

            );
        }

        if(!props.dateWorkout.date || (this.props.dateValue !== '' && this.props.dateValue !== props.dateWorkout.date) ) return;
        return (
            <TableRow key={i} className={props.tripId} onClick={this.handleClick}>
                <TableCell className={props.tripId}>
                    {props.dateWorkout.date}
                </TableCell>
                <TableCell className={props.tripId}>
                {
                    (()=>{
                        if(this.props.tripData === 'speed') return speed;
                        else if(this.props.tripData === 'time') return time;
                        else if(this.props.tripData === 'distance') return distance;                  
                    })()
                }
                </TableCell>
                {this.state.redirect ? <Redirect to={`/wyniki-treningow/trening/${this.state.tripID}`} /> : null}
            </TableRow>

        );
        
       
    }

  render() {
    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <strong>Dzień treningu</strong>
                        </TableCell>
                        <TableCell>
                            <strong>
                            {
                                (()=>{
                                    if(this.props.tripData === 'speed') return 'Prędkość'
                                    else if(this.props.tripData === 'time') return 'Czas'
                                    else if(this.props.tripData === 'distance') return 'Dystans'                  
                                })()
                            }</strong>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.workoutsData.map(this.showTableRows)}
                </TableBody>
            </Table>
        </Paper>
    ); 
  }
}



const mapStateToProps = state => {
    return{
        workoutsData: state.resultsWorkout,
        dateValue: state.filterData.dateValue,
        timeValue : state.filterData.time,
        tripData: state.filterData.tripData

    }
  }

  const mapDispatchToProps = dispatch => {
      return {
          clearDataAfterUnmount: () => dispatch(clearDataAfterUnmount()),
          getDataFromDatabase: () => dispatch(getDataFromDatabase())
      }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsResultsTable);
