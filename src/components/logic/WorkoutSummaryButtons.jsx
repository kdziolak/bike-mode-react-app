import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { Button } from '@material-ui/core';
import { saveToDatabase } from '../../actions/workoutSummaryActions'

class WorkoutSummaryButtons extends Component {
  constructor(){
    super();
    this.state = {
      redirect: false
    }
  }

  handleSave = () => {
    this.props.saveToDatabase(this.props.measurementPoint);
    this.setState({redirect: true})
  }

  render() {
    return (
    <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', marginTop: '3vh'}}>
        <Button variant='contained' color='primary' onClick={this.handleSave}>Zapisz trening</Button>
        {this.state.redirect ? <Redirect to='/wyniki-treningow' /> : null }
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
    saveToDatabase: data => saveToDatabase(data)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutSummaryButtons);