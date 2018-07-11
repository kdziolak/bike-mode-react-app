import React from 'react';
import {Grid, Typography} from '@material-ui/core'
import WorkoutSummarySelect from '../WorkoutSummarySelect'
import WorkoutSummaryCards from '../WorkoutSummaryCards'


const WorkoutSummaryPage = () => {
    return (
        <Grid container spacing={16} style={{marginTop: '12vh'}}>
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
        </Grid> 
    );
}

export default WorkoutSummaryPage;
