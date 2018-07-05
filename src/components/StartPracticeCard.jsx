import React, { Component } from 'react';
import {Card, CardContent, Typography, Button, CardActions} from '@material-ui/core';
import { Link } from 'react-router-dom'
import './css/StartPracticeCard.css'

class StartPracticeCard extends Component {
  render() {
    return (
        <Card className='card-style'>
            <CardContent>
                <Typography variant='headline' align='center'>
                    Jesteś gotowy?
                </Typography>
            </CardContent>
            <CardActions>
                <Link style={{textDecoration: 'none'}} to='/rozpocznij-trening'>
                    <Button variant='contained' color='primary'>Rozpocznij trening</Button>
                </Link>
            </CardActions>
        </Card>
    );
  }
}

export default StartPracticeCard;
