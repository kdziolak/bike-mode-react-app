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
        if(Array.isArray(props.tripMeasurementPoints)){
            props.tripMeasurementPoints.map(el => {
                // console.log(el.time);
            })
        }
        if(this.props.dateValue === 'allDates' && props.dateWorkout.date !== undefined){
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

        if(!props.dateWorkout.date || props.dateWorkout.date !== undefined || (this.props.dateValue !== '' && this.props.dateValue !== props.dateWorkout.date) ) return;
        
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
                            <strong>Dystans</strong>
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
        dateValue: state.filterData.dateValue
    }
  }

  export default connect(mapStateToProps, null)(WorkoutsResultsTable);
