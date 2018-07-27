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
                // console.log(el)
            })
        }
        if(!props.dateWorkout.date || props.dateWorkout.postDateValue === props.dateWorkout.date) return;
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
    console.log(state.resultsWorkout)
    return{
        workoutsData: state.resultsWorkout
    }
  }
  
  export default connect(mapStateToProps, null)(WorkoutsResultsTable);
