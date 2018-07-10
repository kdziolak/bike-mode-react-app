import React from 'react';
import {Grid} from '@material-ui/core'
import WorkoutSummary from '../WorkoutSummary'

const WorkoutSummaryPage = () => {
    return (
        <Grid container spacing={16} style={{marginTop: '45px'}}>
            <Grid item xs={12}>
                <WorkoutSummary />
            </Grid>
        </Grid> 
    );
}

export default WorkoutSummaryPage;
