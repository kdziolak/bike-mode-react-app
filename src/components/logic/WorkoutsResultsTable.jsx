import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Table, TableBody, TableCell, TableRow, TableHead, Paper, CircularProgress} from '@material-ui/core';
import {Redirect} from 'react-router-dom';

class WorkoutsResultsTable extends Component {
    constructor(){
        super();
        this.state ={
            redirect: false
        }
        
    }


    handleClick = () => {
        this.setState({
            redirect: true
        })
    }


    showTableRows = (props, i) => {

        let time;

        if(Array.isArray(props.tripMeasurementPoints)){
            props.tripMeasurementPoints.map(el => {
                if(this.props.tripData === 'time'){
                    time =  props.tripMeasurementPoints[props.tripMeasurementPoints.length-1].time;
                    return;
                }
            })
        }
        

        if(this.props.dateValue === 'allDates' && props.dateWorkout.date !== undefined){
            return (
                <TableRow key={i} onClick={this.handleClick}>
                    <TableCell>
                        {props.dateWorkout.date}
                    </TableCell>
                    <TableCell>
                        {
                            time
                        }
                    </TableCell>
                    {this.state.redirect ? <Redirect to={`/wyniki-treningow/trening/${props.tripId}`} /> : null}
                </TableRow>

            );
        }

        if(!props.dateWorkout.date || (this.props.dateValue !== '' && this.props.dateValue !== props.dateWorkout.date) ) return;
        
        return (
            <TableRow key={i} onClick={this.handleClick}>
                <TableCell>
                    {props.dateWorkout.date}
                </TableCell>
                <TableCell>
                </TableCell>
                {this.state.redirect ? <Redirect to={`/wyniki-treningow/trening/${props.tripId}`} /> : null}
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
        tripData: state.filterData.tripData

    }
  }

  export default connect(mapStateToProps, null)(WorkoutsResultsTable);
