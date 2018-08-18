import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getDataFromDatabase, clearDataAfterUnmount} from '../../actions/workoutsResultsActions'
import {CardContent, Typography} from '@material-ui/core'

class DetailedWorkoutDataCards extends Component { 
    constructor(props){
        super(props);
        this.state={
            paramsID: props.paramsId
        }
    }
   showValue = (el,i) => {
    if(el.tripId === this.state.paramsID){
        console.log(el.tripMeasurementPoints[el.tripMeasurementPoints.length - 1])
        return(
            <p>{el.tripMeasurementPoints[el.tripMeasurementPoints.length - 1].distance}</p>
        );
    }
   }
  render() {
    return (
        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>
            <img style={{width: '50px'}} src="https://d30y9cdsu7xlg0.cloudfront.net/png/236772-200.png" alt='distance'/>
            <Typography>
                Dystans
            </Typography>
            <Typography style={{fontSize: '1rem'}}>
                <strong>{this.props.measurementPoint.map(this.showValue)}</strong>
            </Typography>
        </CardContent>
    );
  } 
}


const mapStateToProps = state => {
    console
    return {
        measurementPoint: state.resultsWorkout,
        index: state.resultsWorkout.index
    }
}

export default connect(mapStateToProps, null)(DetailedWorkoutDataCards);

