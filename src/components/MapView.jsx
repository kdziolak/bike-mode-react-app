import React, { Component } from 'react';
import {connect} from 'react-redux';
import {CircularProgress,Typography, Button} from '@material-ui/core'
import {Map, Marker,TileLayer} from 'react-leaflet';

class MapView extends Component {
    constructor(){
        super();
        this.state = {
            position: [null],
        }
    }
    componentWillMount = () => {
        navigator.geolocation.getCurrentPosition(pos => {
            this.setState({
                position: [pos.coords.latitude, pos.coords.longitude]
            })
        }, err => {
            alert(err.message)
        }, {enableHighAccuracy: true,timeOut: 200, maximumAge: 10000})
    }
    
  render() {
      if(this.state.position[0] !== null){
        return (
            <Map style={{height: '40vh', width: '103vw'}} center={this.state.position} zoom={20}>
                <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={this.state.position}>
                </Marker>
                {/* {this.state.marker.map((props, i) => <Marker position={this.state.position} key={i}></Marker>)} */}
            </Map>  
        );
    }else{
        return(
            <div style={{marginTop: '15vh'}}>
                <Typography align='center' variant='headline'>Ładowanie...<br/><br/><CircularProgress size={50} /></Typography>
            </div>
        );
    }
  }
}

const mapStateToProps = state => {
    return {
        
    }
}
const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapView);
