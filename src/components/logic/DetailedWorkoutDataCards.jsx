import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getDataFromDatabase, clearDataAfterUnmount} from '../../actions/workoutsResultsActions'
import {CardContent, Typography} from '@material-ui/core'

class DetailedWorkoutDataCards extends Component {

    componentWillMount(){
        this.props.clearDataAfterUnmount();
        this.props.getDataFromDatabase();
    }
    componentWillUnmount() {
        this.props.clearDataAfterUnmount();
    }

  render() {
    return (
        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>
            <img style={{width: '50px'}} src="https://d30y9cdsu7xlg0.cloudfront.net/png/236772-200.png" alt='distance'/>
            <Typography>
                zzz
            </Typography>
            <br/>
            <Typography style={{fontSize: '1rem'}}>
                {/* <strong>{this.props.measurementPoint.distance}</strong> m */}
            </Typography>
        </CardContent>
    );
  } 
}


const mapStateToProps = state => {
    console.log(state.resultsWorkout)
    return {
        measurementPoint: state.resultsWorkout,
        index: state.resultsWorkout.index
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getDataFromDatabase: () => dispatch(getDataFromDatabase()),
        clearDataAfterUnmount: () => dispatch(clearDataAfterUnmount())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailedWorkoutDataCards);
