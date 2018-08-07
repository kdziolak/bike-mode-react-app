import React from 'react';
import {Grid} from '@material-ui/core'
import GreetingsBlock from '../GreetingBlock'
import StartPracticeCard from '../logic/StartPracticeCard'
import OptionCard from '../OptionCard';

const MainPage = () => {
    return (
        <Grid container spacing={16} style={{marginTop: '5vh'}}>
            <Grid item xs={12}>
                <GreetingsBlock/>
            </Grid>
            <Grid item xs={1} sm={3}></Grid>
            <Grid item xs={10} sm={6} style={{marginTop: '5vh'}}>
                <StartPracticeCard/>
            </Grid>
            <Grid item sm={3}></Grid>
            <Grid item sm={2}></Grid>
            <Grid item xs={12} sm={8} style={{marginTop: '5vh'}}>
                <OptionCard/>
            </Grid>
            <Grid item sm={2}></Grid>
        </Grid> 
    );
}

export default MainPage;
