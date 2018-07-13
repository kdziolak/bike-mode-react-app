import React from 'react';
import {Grid} from '@material-ui/core'
import GreetingsBlock from '../GreetingBlock'
import StartPracticeCard from '../StartPracticeCard'
import OptionCard from '../OptionCard';

const MainPage = () => {
    return (
        <Grid container spacing={16} style={{marginTop: '18vh'}}>
            <Grid item xs={12}>
                <GreetingsBlock/>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={10} style={{marginTop: '5vh'}}>
                <StartPracticeCard/>
            </Grid>
            <Grid item xs={12} style={{marginTop: '5vh'}}>
                <OptionCard/>
            </Grid>
        </Grid> 
    );
}

export default MainPage;
