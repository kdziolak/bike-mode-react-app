import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import {Grid, Card, CardContent, Typography} from '@material-ui/core'
import {connect} from 'react-redux'
import { runInThisContext } from 'vm';

class WorkoutSummaryCards extends Component {
    constructor(){
        super()
        this.state = {
            cardsValue: ['dystans', 'całkowity czas', 'prędkość', 'czas odcinkowy'],
        }
    }

    showCards = (props, i) =>{
        return(
            <Grid item xs={6} key={i}>
                <Card>
                        {
                            (()=>{
                                if(props === 'dystans'){
                                    return(
                                        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>
                                            <img style={{width: '50px'}} src="https://d30y9cdsu7xlg0.cloudfront.net/png/236772-200.png" alt='distance'/>
                                            <Typography>
                                                {props}
                                            </Typography>
                                            <br/>
                                            <Typography style={{fontSize: '1rem'}}>
                                                <strong>{this.props.measurementPoint[this.props.index].distance}</strong> m
                                            </Typography>
                                        </CardContent>

                                    );
                                }else if( props === 'całkowity czas'){
                                    return(
                                        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>

                                            <img style={{width: '50px'}} src="https://www.freeiconspng.com/uploads/sports-stopwatch-icon-24.png" alt='distance'/>
                                            <Typography>
                                                {props}
                                            </Typography>
                                            <br/>
                                            <Typography style={{fontSize: '1rem'}}>
                                                <strong>{this.props.measurementPoint[this.props.index].time}</strong>
                                            </Typography>
                                        </CardContent>                                    );
                                }else if( props === 'prędkość'){
                                    return(
                                        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>

                                            <img style={{width: '50px'}} src="https://cdn3.iconfinder.com/data/icons/office-productivity-and-communication/400/Productivity-11-512.png" alt='distance'/>
                                            <Typography>
                                                {props}
                                            </Typography>
                                            <br/>
                                            <Typography style={{fontSize: '1rem'}}>
                                                <strong>{this.props.measurementPoint[this.props.index].averageSpeed ? this.props.measurementPoint[this.props.index].averageSpeed : 0}</strong>
                                            </Typography>
                                         </CardContent>
                                    );
                                }
                                else if( props === 'czas odcinkowy'){
                                    return(
                                        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>
                                            <img style={{width: '50px'}} src="https://d30y9cdsu7xlg0.cloudfront.net/png/14262-200.png" alt='distance'/>
                                            <Typography>
                                                {props}
                                            </Typography>
                                            <br/>
                                            <Typography style={{fontSize: '1rem'}}>
                                                <strong>{Math.round(this.props.measurementPoint[this.props.index].serializedTime * 100) / 100} ''</strong>
                                            </Typography>
                                         </CardContent>
                                );
                            }
                            })()
                        }
                </Card>
            </Grid>
        );

    }
   render(){
       if(this.props.measurementPoint == false){
           return(
               <Redirect to='/rozpocznij-trening' />
           );
       }
        return (
            <Grid container spacing={16} style={{marginTop: '2vh'}}>
                 {this.state.cardsValue.map(this.showCards)}
            </Grid>
         );
  }
}

const mapStateToProps = state => {
    return {
        measurementPoint: state.summaryWorkout.measurementPoint,
        index: state.summaryWorkout.index
    }
}


export default connect(mapStateToProps, null)(WorkoutSummaryCards);
