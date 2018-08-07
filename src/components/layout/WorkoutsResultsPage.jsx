import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import WorkoutsResultsSettings from '../logic/WorkoutsResultsSettings'
import WorkoutsResultsTable from '../logic/WorkoutsResultsTable'

const WorkoutsResultsPage = () => {
    return (
        <Grid container spacing={16} style={{marginTop: '5vh'}}>
           <Grid item xs={12}>
            <Typography variant='display1' style={{textAlign: 'center'}}>Wyniki</Typography>
           </Grid>
           <Grid item xs={1} />
           <Grid item xs={10}>
                <WorkoutsResultsSettings />
           </Grid>
           <Grid item xs={1} />
           <Grid item xs={1} />
           <Grid item xs={10}>
                <WorkoutsResultsTable />
           </Grid>
           <Grid item xs={1} />
        </Grid> 
    );
}

export default WorkoutsResultsPage;
