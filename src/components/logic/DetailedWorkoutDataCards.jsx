import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getDataFromDatabase, clearDataAfterUnmount} from '../../actions/workoutsResultsActions'
import {CardContent, Typography} from '@material-ui/core'

class DetailedWorkoutDataCards extends Component { 
    constructor(props){
        super(props);
        this.state={
            paramsID: props.paramsId
        }
    }

    showValues = (el, i) => {
        return(
            <div key={i} style={{padding: '30px', display: 'flex', flexDirection: 'column', justifyContent:'center',alignItems:'center'}}>
                {
                    (() => {
                        if(i === 0){
                            return(
                                <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center',alignItems:'center'}}>
                                    <img style={{width: '50px', textAlign: 'center'}} src="https://cdn3.iconfinder.com/data/icons/office-productivity-and-communication/400/Productivity-11-512.png" alt='distance'/>
                                    <Typography>
                                        Średnia prędkość
                                    </Typography>
                                </div>
                            );
                        } else if( i === 1){
                            return(
                                <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center',alignItems:'center'}}>
                                    <img style={{width: '50px', textAlign: 'center'}} src="https://d30y9cdsu7xlg0.cloudfront.net/png/236772-200.png" alt='distance'/>
                                    <Typography>
                                        Dystans
                                    </Typography>
                                </div>
                            );
                        }else if( i === 2){
                            return(
                                <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center',alignItems:'center'}}>
                                    <img style={{width: '50px', textAlign: 'center'}} src="https://d30y9cdsu7xlg0.cloudfront.net/png/14262-200.png" alt='distance'/>
                                    <Typography>
                                        Czas odcinkowy
                                    </Typography>
                                </div>
                            );
                        }else if( i === 3){
                            return(
                                <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center',alignItems:'center'}}>
                                    <img style={{width: '50px', textAlign: 'center'}} src="https://www.freeiconspng.com/uploads/sports-stopwatch-icon-24.png" alt='distance'/>
                                    <Typography>
                                        Całkowity czas
                                    </Typography>
                                </div>
                            );
                        }
                    })()
                }
                <br/>
                <Typography style={{fontSize: '1rem'}}>
                    <strong>{el}</strong>
                </Typography>
            </div>
        );
    }
   showCards = (el,i) => {
    if(el.tripId === this.state.paramsID){
        let dataArray = Object.values(el.tripMeasurementPoints[el.tripMeasurementPoints.length - 1]);
        return(
            <div key={i}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center',alignItems:'center'}}>
                    <img style={{width: '50px', textAlign: 'center'}} src="https://image.flaticon.com/icons/svg/55/55238.svg" alt='distance'/>

                    <Typography>
                        Data: <strong>{el.dateWorkout.date}</strong>
                    </Typography>
                    <Typography>
                        Godzina: <strong>{el.dateWorkout.time}</strong>
                    </Typography>
                </div>
                <div style={{display: 'flex',flexWrap: 'wrap', justifyContent: 'space-around', alignItems:'flex-start'}}>
                    {dataArray.map(this.showValues)}
                </div>
            </div>
            
        );
    }
   }
  render() {
    return (
        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>
            
            {this.props.measurementPoint.map(this.showCards)}
            {/* <img style={{width: '50px'}} src="https://d30y9cdsu7xlg0.cloudfront.net/png/236772-200.png" alt='distance'/>
            <Typography>
                Dystans
            </Typography>
            <Typography style={{fontSize: '1rem'}}>
                <strong>{this.props.measurementPoint.map(this.showValue)}</strong>
            </Typography> */}
        </CardContent>
    );
  } 
}


const mapStateToProps = state => {
    return {
        measurementPoint: state.resultsWorkout,
        index: state.resultsWorkout.index
    }
}

export default connect(mapStateToProps, null)(DetailedWorkoutDataCards);

