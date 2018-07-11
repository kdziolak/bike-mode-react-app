import React, { Component } from 'react';
import {Grid, Card, CardContent, Typography} from '@material-ui/core'
import {connect} from 'react-redux'

class WorkoutSummaryCards extends Component {
    constructor(){
        super()
        this.state = {
            cardsValue: ['dystans', 'czas', 'prędkość']
        }
    }

    showCards = (props, i) =>{
        return(
            <Grid item xs={6} key={i}>
                <Card>
                    <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>
                        {
                            (()=>{
                                if(props === 'dystans'){
                                    return(
                                        <img style={{width: '50px'}} src="https://d30y9cdsu7xlg0.cloudfront.net/png/236772-200.png" alt='distance'/>
                                    );
                                }else if( props === 'czas'){
                                    return(
                                        <img style={{width: '50px'}} src="https://www.freeiconspng.com/uploads/stopwatch-icon-20.png" alt='distance'/>
                                    );
                                }else if( props === 'prędkość'){
                                    return(
                                        <img style={{width: '50px'}} src="https://cdn3.iconfinder.com/data/icons/office-productivity-and-communication/400/Productivity-11-512.png" alt='distance'/>
                                    );
                                }
                            })()
                        }
                        <Typography>
                            {props}
                        </Typography>
                        <br/>
                        <Typography style={{fontSize: '1rem'}}>
                            <strong></strong>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        );

    }
   render(){
    return (
       <Grid container spacing={16} style={{marginTop: '5vh'}}>
            {this.state.cardsValue.map(this.showCards)}
       </Grid>
    );
  }
}

const mapStateToProps = state => {
    return{
        measurementPoint: state.summaryWorkout.measurementPoint
    }
}


export default connect(mapStateToProps, null)(WorkoutSummaryCards);
