import React from 'react';
import {Grid, Typography} from '@material-ui/core'
import WorkoutSummarySelect from '../logic/WorkoutSummarySelect'
import WorkoutSummaryCards from '../logic/WorkoutSummaryCards'
import WorkoutSummaryButtons from '../logic/WorkoutSummaryButtons'


const WorkoutSummaryPage = () => {
    return (
        <Grid container spacing={16} style={{marginTop: '5vh'}}>
            <Grid item xs={12}>
                <Typography variant='title' style={{fontSize: '25px'}} align='center'>
                    <strong> Posumowanie treningu.</strong>
                </Typography>
            </Grid>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={6}>
                <WorkoutSummarySelect />
            </Grid>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={10}>
                <WorkoutSummaryCards/>
            </Grid> 
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={10}>
                <WorkoutSummaryButtons/>
            </Grid> 
            <Grid item xs={1}>
            </Grid>
        </Grid> 
    );
}

export default WorkoutSummaryPage;
