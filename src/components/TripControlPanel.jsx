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
            speedTime: 0,
            getTime: {
                seconds: 0,
                minutes: 0,
                hours: 0
            },
            distancePassed: 20,
            measurementPoint: [],
            changeBtn: true,
            pauza: false
        }
    }

    pauzaBtnClick = () => {
        this.setState({
            pauza: !this.state.pauza
        })
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
                distance: (Math.round((this.state.distance+dist) * 100)/100) + 20
            })
            if(this.state.distance >= this.state.distancePassed){
                this.setState({
                    distancePassed: (this.state.distancePassed + 20),
                    measurementPoint: [
                        ...this.state.measurementPoint,
                        {
                            time: `${this.state.getTime.hours < 10 ? ('0' + this.state.getTime.hours) : this.state.getTime.hours }:${this.state.getTime.minutes < 10 ? ('0' + this.state.getTime.minutes) : this.state.getTime.minutes }:${this.state.getTime.seconds < 10 ? ('0' + this.state.getTime.seconds) : this.state.getTime.seconds }`,
                            distance: this.state.distance,
                            speed: Math.round(((this.state.distance / 1000) / (this.state.speedTime * 3600)), 2)
                        }
                    ]
                })
                this.props.sendMarkersToMap(this.state.distance, this.state.position)
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
        let timeToMeasureSpeed = startTime;
        let durationTime;
        let differenceTimes = 0;
        let getDifferenceTimes = 0;
        setInterval(() => {
            if(!this.state.pauza){
                if(differenceTimes !== 0){
                    getDifferenceTimes += differenceTimes
                }
                if(this.state.getTime.seconds === 59){
                    startTime = new Date();
                    getDifferenceTimes = 0;
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
                    getDifferenceTimes = 0;
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
                    getDifferenceTimes = 0;
                    this.setState({
                        getTime: {
                            hours: 0,
                            minutes: 0,
                            seconds: 0
                        } 
                    })
                }
                durationTime = new Date();
                let countTime = Math.round((durationTime - startTime)/1000, 3);
                this.setState({
                    getTime: {
                        ...this.state.getTime,
                        seconds: (countTime - getDifferenceTimes)
                    },
                    speedTime: (durationTime - timeToMeasureSpeed),
                    changeBtn: false
                })
                differenceTimes = 0;
            }else{
                differenceTimes = Math.ceil((new Date() - durationTime) / 1000);
            }
        }, 1000)
   

        this.watchGeoPosition();
        
    }

    tamplateCard = (props, i) => {
        return(
            <Grid item xs={4} key={i}>
                <Card style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <CardContent>
                        <Typography align='center' variant='title'>
                            {props}
                        </Typography>
                        <br/>
                        {(() => {
                            let speed = ((this.state.distance / 1000) / (this.state.speedTime * 3600));
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
            <Grid container spacing={16} style={{paddingLeft: '2vw', marginTop: '2vh'}} alignItems='center' justify='center'>
                {this.state.tripControlCard.map(this.tamplateCard)}
                { this.state.changeBtn ?
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
                    : (
                    <div>
                    <Button
                    style={{
                        marginTop: '5vh',
                        marginRight: '30px',
                        width: '30%',
                        height: '8vh'
                    }}
                    onClick={this.pauzaBtnClick}
                    variant='contained'
                    color='primary'
                    >
                        <Typography variant='title' style={{color: 'white'}}>
                            {this.state.pauza ? 'Wznów' : 'Pauza'}
                        </Typography>
                    </Button>
                    <Button
                    style={{
                        marginTop: '5vh',
                        width: '50%',
                        height: '8vh'
                    }}
                    onClick={this.startPractitce}
                    variant='contained'
                    color='secondary'
                    >
                        <Typography variant='title' style={{color: 'white'}}>
                            Zakończ
                        </Typography>
                </Button> </div>)
                }
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
        sendMarkersToMap: (distance, position) => dispatch(sendMarkersToMap(distance, position))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripControlPanel);
