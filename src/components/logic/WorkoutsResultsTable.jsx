import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Table, TableBody, TableCell, TableRow, TableHead, Paper} from '@material-ui/core';
import {getDataFromDatabase} from '../../actions/workoutsResultsActions'
import {Redirect} from 'react-router-dom';
import { timingSafeEqual } from 'crypto';
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
        if(!props.dateWorkout.date) return;
        return (
            
                <TableRow onClick={this.handleClick}>
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
        workoutsData: state.resultsWorkout
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
        getDataFromDatabase: () => dispatch(getDataFromDatabase())
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsResultsTable);
