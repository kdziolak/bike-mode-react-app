import React from 'react';
import {Grid} from '@material-ui/core'
import DetailedWorkoutDataMap from '../logic/DetailedWorkoutDataMap'
import DetailedWorkoutDataCards from '../logic/DetailedWorkoutDataCards'

const DetailedWorkoutDataPage = (props) => {
    return (
        <Grid container spacing={16}>
            <Grid item xs={12}>
                <DetailedWorkoutDataMap paramsId={props.match.params.id}/>
            </Grid>
            <Grid item xs={12}>
                <DetailedWorkoutDataCards />
            </Grid>
        </Grid> 
    );
}

export default DetailedWorkoutDataPage;
