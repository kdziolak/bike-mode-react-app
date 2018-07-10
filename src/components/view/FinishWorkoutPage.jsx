import React from 'react';
import {Grid, Typography, Button} from '@material-ui/core'
import {Link} from 'react-router-dom'

const FinishWorkoutPage = () => {
    return (
        <Grid container spacing={16}>
            <Grid item xs={12}>
                <div style={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <img style={{width: '200px'}} src='http://moziru.com/images/trophy-clipart-best-award-14.png'/>
                    <Typography variant='display1'>Gratulacje!</Typography>
                    <Typography variant='title'>Ukończyłeś trening.</Typography>
                    <br/><br/><br/>
                    <Link to='/podsumowanie-treningu' style={{textDecoration: 'none'}}>
                        <Button variant='contained' color='primary'>Podsumowanie</Button>
                    </Link>
                </div>
            </Grid>
        </Grid> 
    );
}

export default FinishWorkoutPage;
