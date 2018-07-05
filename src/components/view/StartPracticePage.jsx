import React from 'react';
import {Grid, Button} from '@material-ui/core'
import MapView from '../MapView'

const StartPracticePage = () => {
    return (
        <Grid container spacing={16} style={{marginTop: '45px'}}>
            <Grid item xs={12}>
                <MapView/>
            </Grid>
        </Grid> 
    );
}

export default StartPracticePage;
