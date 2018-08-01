import React, { Component } from 'react';
import {Card} from '@material-ui/core';

class DetailedWorkoutDataMap extends Component {
    constructor(props){
        super(props);

        this.state={
            paramsID: props.paramsId
        }

    }
  render() {
    return (
        <div style={{marginTop: '10vh'}}>
            {this.state.paramsID}
        </div>
    );
  }
}

export default DetailedWorkoutDataMap;
