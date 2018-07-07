import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Grid, Card, CardContent, Typography, Button} from '@material-ui/core';
import {sendMarkersToMap} from '../actions/mapActions';

class TripControlPanel extends Component {
    constructor(){
        super();
        this.state = {
            position: [],
            tripControlCard: [
                'distance',
                'time',
                'speed'
            ],
            distance: 0,
            getTime: {
                seconds: 0,
                minutes: 0,
                hours: 0
            },
            distancePassed: 20,
        }
    }

    watchGeoPosition = () => {
        navigator.geolocation.watchPosition(pos => {
            let dist = this.distance(
                            !this.state.position[1] ? pos.coords.longitude : this.state.position[1],
                            !this.state.position[0] ? pos.coords.latitude : this.state.position[0], 
                            pos.coords.longitude,
                            pos.coords.latitude
                        );
            this.setState({
                position: [pos.coords.latitude, pos.coords.longitude],
                distance: (Math.round((this.state.distance+dist) * 100)/100),
            })
            if(this.state.distance >= this.state.distancePassed){
                this.setState({
                    distancePassed: (this.state.distancePassed + 20)
                })
                this.props.sendMarkersToMap(this.state.distance)
            }
        }, err => {
            alert(err.message)
        }, {enableHighAccuracy: true,timeOut: Infinity, maximumAge: 10000})
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
        let d = (R * c) * 1000; // Distance in m
        return d;
      }

    startPractitce = () =>{
        let startTime = new Date();
        setInterval(() => {
            if(this.state.getTime.seconds === 59){
                startTime = new Date();
                this.setState({
                    getTime: {
                        ...this.state.getTime,
                        minutes: (1 + this.state.getTime.minutes),
                        seconds: 0
                    } 
                })
            }
            if(this.state.getTime.seconds === 59 && this.state.getTime.minutes === 59){
                startTime = new Date();
                this.setState({
                    getTime: {
                        hours: (1 + this.state.getTime.hours),
                        minutes: 0,
                        seconds: 0
                    } 
                })
            }
            if(this.state.getTime.seconds === 59 && this.state.getTime.minutes === 59 && this.state.getTime.hours === 23){
                startTime = new Date();
                this.setState({
                    getTime: {
                        hours: 0,
                        minutes: 0,
                        seconds: 0
                    } 
                })
            }
            let durationTime = new Date();
            this.setState({
                getTime: {
                    ...this.state.getTime,
                    seconds: Math.round((durationTime - startTime)/1000, 3)
                } 
            })
        }, 1000)

        this.watchGeoPosition();
        
    }

    tamplateCard = (props, i) => {
        return(
            <Grid item xs={4}>
                <Card style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <CardContent>
                        <Typography align='center' variant='title'>
                            {props}
                        </Typography>
                        <br/>
                        {(() => {
                            let speed = ((this.state.distance / 1000) / (this.state.getTime * 3600));
                                if(props === 'distance'){
                                    return(
                                        <Typography align='center' variant='headline'>
                                            {this.state.distance} <br/> m
                                        </Typography>
                                    );
                                }else if(props === 'time'){
                                    return(
                                        <Typography align='center' variant='headline'>
                                            {`${this.state.getTime.hours < 10 ? ('0' + this.state.getTime.hours) : this.state.getTime.hours }:${this.state.getTime.minutes < 10 ? ('0' + this.state.getTime.minutes) : this.state.getTime.minutes }:${this.state.getTime.seconds < 10 ? ('0' + this.state.getTime.seconds) : this.state.getTime.seconds } `} <br/>
                                        </Typography>
                                    );
                                }
                                else if(props === 'speed'){
                                    return(
                                        <Typography align='center' variant='headline'>
                                            { speed ? Math.round(speed, 2) : 0} <br/> km/h
                                        </Typography>
                                    );
                                }
                            })()}
                        
                    </CardContent>
                </Card>
            </Grid>

        );
    }
  render() {
    return (
            <Grid container spacing={16} style={{paddingLeft: '2vw', marginTop: '4vh'}} alignItems='center' justify='center'>
                {this.state.tripControlCard.map(this.tamplateCard)}
                <Button
                style={{
                    marginTop: '5vh',
                    width: '30%',
                    height: '8vh'
                }}
                onClick={this.startPractitce}
                variant='contained'
                color='primary'
                >
                    <Typography variant='title' style={{color: 'white'}}>
                        Start
                    </Typography>
                </Button>
            </Grid>
            
    );
  }
}

const mapStateToProps = state => {
    return {
        
    }
}
const mapDispatchToProps = dispatch => {
    return {
        sendMarkersToMap: (distance) => sendMarkersToMap(distance)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripControlPanel);
