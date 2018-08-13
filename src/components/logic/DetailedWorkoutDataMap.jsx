import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getDataFromDatabase } from '../../actions/workoutsResultsActions'
import {Map, Marker,TileLayer, Popup} from 'react-leaflet';

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

    showMarkers = (elem,i, el) => {
        return (
            <Marker key={i} position={elem}>
                <Popup>Pokonano {el.tripMeasurementPoints[i].distance} kilometrów.</Popup>
            </Marker>
        )
    }

    showMap = (el,i) => {
        if(this.state.paramsID === el.tripId){
            return(
                <Map key={i} style={{height: '40vh', width: '103vw'}} center={el.mapPositions[el.mapPositions.length-1]} zoom={15}>
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {el.mapPositions.map((elem, i) => this.showMarkers(elem, i, el))}
                </Map>  
            )
        }
        
    }

  render() {
    return (
        <div>
            {this.props.resultsWorkout.map(this.showMap)}
        </div> 
    );
  }
}


const mapStateToProps = state => {
    return {
        resultsWorkout: state.resultsWorkout
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getDataFromDatabase: () => dispatch(getDataFromDatabase()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailedWorkoutDataMap);

