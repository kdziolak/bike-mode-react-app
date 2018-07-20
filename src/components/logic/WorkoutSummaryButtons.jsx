import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import { saveToDatabase } from '../../actions/workoutSummaryActions'

class WorkoutSummaryButtons extends Component {

  handleSave = () => {
    console.log(this.props.measurementPoint)
    this.props.saveToDatabase();
  }

  render() {
    return (
    <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', marginTop: '3vh'}}>
        <Button variant='contained' color='primary' onClick={this.handleSave}>Zapisz trening</Button>
        <br/>
        <Link to="/" style={{width: '100%', textDecoration: 'none'}}>
          <Button variant='contained' color='secondary' style={{width: '100%'}}>Zakoncz bez zapisywania</Button>
        </Link>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      measurementPoint: state.summaryWorkout.measurementPoint,
      index: state.summaryWorkout.index
  }
}

const mapDispatchToProps = dispatch => {
  return{
    saveToDatabase: () => dispatch(saveToDatabase())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutSummaryButtons);