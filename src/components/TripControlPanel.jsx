import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Grid, Card, CardContent, CardActions, Typography, Button} from '@material-ui/core';

class TripControlPanel extends Component {
    constructor(){
        super();
        this.state = {
            position: [0, 0],
            tripControlCard: [
                'distance',
                'time',
                'speed'
            ],
            distance: 0,
            getTime: 0,
            oneKm: 100,
            marker: [],
        }
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
        let startTime = new Date();
        setInterval(() => {
            let durationTime = new Date();
            this.setState({
                getTime: Math.round((durationTime - startTime)/1000, 3)
            })
        }, 1000)
        setInterval(() => {
            navigator.geolocation.getCurrentPosition(pos => {
                let dist = this.distance(this.state.position[1], this.state.position[0] ,pos.coords.longitude, pos.coords.latitude);
                this.setState({
                    position: [pos.coords.latitude, pos.coords.longitude],
                    distance: (this.state.distance+dist),
                })
                console.log(this.state.getTime)
                if(this.state.distance >= this.state.oneKm){
                    this.setState({
                        marker: [...this.state.marker, this.state.distance],
                        oneKm: (this.state.oneKm + 100)
                    })
                }
            }, err => {
                alert(err.message)
            }, {enableHighAccuracy: true,timeOut: 200, maximumAge: 10000})
        }, 30000)
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
                                if(props === 'distance'){
                                    return(
                                        <Typography align='center' variant='headline'>
                                            {this.state.distance} <br/> m
                                        </Typography>
                                    );
                                }else if(props === 'time'){
                                    return(
                                        <Typography align='center' variant='headline'>
                                            {this.state.getTime} <br/> sec
                                        </Typography>
                                    );
                                }
                                else if(props === 'speed'){
                                    return(
                                        <Typography align='center' variant='headline'>
                                            {(this.state.distance / 1000) / (this.state.getTime * 3600) } <br/> km/h
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
            <Grid container spacing={16} style={{paddingLeft: '2vw', marginTop: '8vh'}} alignItems='center' justify='center'>
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
const mapDispatchToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripControlPanel);
