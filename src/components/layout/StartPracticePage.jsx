import React from 'react';
import {Grid} from '@material-ui/core'
import MapView from '../MapView'
import TripControlPanel from '../logic/TripControlPanel'

const StartPracticePage = () => {
    return (
        <Grid container spacing={16}>
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
