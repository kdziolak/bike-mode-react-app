import React from 'react';
import {Grid} from '@material-ui/core'
import DetailedWorkoutDataMap from '../logic/DetailedWorkoutDataMap'

const DetailedWorkoutDataPage = (props) => {
    console.log(props.match.params.id)
    return (
        <Grid container spacing={16}>
            <Grid item xs={12}>
                <DetailedWorkoutDataMap paramsId={props.match.params.id}/>
            </Grid>
        </Grid> 
    );
}

export default DetailedWorkoutDataPage;
