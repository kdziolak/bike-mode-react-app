import React from 'react';
import {Grid, Typography} from '@material-ui/core'
// import {WorkoutResultsSettings} from '../logic/WorkoutResultsSettings'
// import {WorkoutResultsTabel} from '../logic/WorkoutResultsTabel'

const WorkoutsResultsPage = () => {
    return (
        <Grid container spacing={16} style={{marginTop: '12vh'}}>
           <Grid item xs={12}>
            <Typography variant='display1' style={{textAlign: 'center'}}>Wyniki</Typography>
           </Grid>
        </Grid> 
    );
}

export default WorkoutsResultsPage;
