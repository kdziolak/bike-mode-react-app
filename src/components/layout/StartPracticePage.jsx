import React from 'react';
import {Grid} from '@material-ui/core'
import MapView from '../MapView'
import TripControlPanel from '../TripControlPanel'

const StartPracticePage = () => {
    return (
        <Grid container spacing={16} style={{marginTop: '45px'}}>
            <Grid item xs={12}>
                <MapView/>
            </Grid>
            <Grid item xs={12}>
                <TripControlPanel />
            </Grid>
        </Grid> 
    );
}

export default StartPracticePage;
