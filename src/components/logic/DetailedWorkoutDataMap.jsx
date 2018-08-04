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

    showPopup = (el,i) => {
        return(
            <Popup key={i}>
                Pokonano {el.distance} kilometrów.
            </Popup>
        )
    }

    showMarkers = (el, i) => {
        console.log(el)
        return (
            <Marker key={i} position={el}>
                {/* <Popup>{value.tripMeasurementPoints[i].distance}</Popup> */}
            </Marker>
        )
    }

    showMap = (el,i) => {
        if(this.state.paramsID === el.tripId){
            console.log(el.tripMeasurementPoints)
            return(
                <Map key={i} style={{height: '40vh', width: '103vw'}} center={el.mapPositions[el.mapPositions.length-1]} zoom={15}>
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {el.mapPositions.map(this.showMarkers)}
                </Map>  
            )
        }
        
    }

  render() {
    return (
        <div style={{marginTop: '9vh'}}>
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
        getDataFromDatabase: () => dispatch(getDataFromDatabase())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailedWorkoutDataMap);

