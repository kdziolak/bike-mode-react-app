import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getDataFromDatabase } from '../../actions/workoutsResultsActions'
import {Map, Marker,TileLayer, Popup} from 'react-leaflet';
import { sendIndexToDisplayValues } from '../../actions/workoutSummaryActions';

class DetailedWorkoutDataMap extends Component {
    constructor(props){
        super(props);

        this.state={
            paramsID: props.paramsId
        }

    }

    componentDidMount(){
        this.props.getDataFromDatabase();
    }

  render() {
    return (
        <Map style={{height: '40vh', width: '103vw'}} center={[0,0]} zoom={3}>
            <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[0,0]}>
            </Marker>
        </Map> 
    );
  }
}


const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {
        getDataFromDatabase: () => dispatch(getDataFromDatabase())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailedWorkoutDataMap);

