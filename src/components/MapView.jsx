import React, { Component } from 'react';
import {CircularProgress,Typography, Button} from '@material-ui/core'
import {Map, Marker,TileLayer} from 'react-leaflet';

class MapView extends Component {
    constructor(){
        super();
        this.state = {
            position: [null],
            distance: 0,
            oneKm: 10,
            marker: []
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
    distance = (lon1, lat1, lon2, lat2) => {
        if (typeof(Number.prototype.toRad) === "undefined") {
            Number.prototype.toRad = function() {
              return this * Math.PI / 180;
            }
          }
        let R = 6371; // Radius of the earth in km
        let dLat = (lat2-lat1).toRad();  // Javascript functions in radians
        let dLon = (lon2-lon1).toRad(); 
        let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
                Math.sin(dLon/2) * Math.sin(dLon/2); 
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        let d = (R * c) * 1000; // Distance in km
        return d;
      }

    startPractitce = () =>{
        setInterval(() => {
            navigator.geolocation.getCurrentPosition(pos => {
                let lastDistance = this.state.distance;
                this.setState({
                    position: [pos.coords.latitude, pos.coords.longitude],
                    distance: this.state.distance+this.distance(this.state.position[1], this.state.position[0] ,pos.coords.longitude, pos.coords.latitude)
                })
                alert(this.state.distance)
                if(this.state.distance >= this.state.oneKm){
                    this.setState({
                        marker: [...this.state.marker, this.state.distance],
                        oneKm: (this.state.oneKm + 10)
                    })
                }
            }, err => {
                alert(err.message)
            }, {enableHighAccuracy: true,timeOut: 200, maximumAge: 10000})
        }, 15000)
    }
  render() {
      if(this.state.position[0] !== null){
        return (
            <div>
            <Map style={{height: '40vh', width: '102vw'}} center={this.state.position} zoom={20}>
                <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={this.state.position}>
                </Marker>
                {this.state.marker.map((props, i) => <Marker position={this.state.position} key={i}></Marker>)}
            </Map>
            <Button
                onClick={this.startPractitce}
                variant='contained' color='primary'>
                Start
            </Button>
            </div>
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

export default MapView;
