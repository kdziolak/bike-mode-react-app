import React, { Component } from 'react';
import {Grid, Card, CardContent, Typography, CardActions, Button} from '@material-ui/core';
import './css/OptionCard.css'

class OptionCard extends Component {
    constructor(){
        super();
        this.state={
            options: ['trasy', 'ostatnie aktywnosci'],
            icons: ['fa-road','fas fa-chart-line']
        }
    }

    templateCard = (props, i) => {
        return(
            <Grid item xs={5} key={i}>
                <Card style={{height: '25vh'}} className='card-style'>
                    <CardContent>
                        <Typography variant='display1'>
                            <span className={`fas ${this.state.icons[i]}`}></span>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained' color='primary'>
                            {props}
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

        );
    }

  render() {
    return (
        <Grid container spacing={16}>
              <Grid item xs={1}></Grid>
              {this.state.options.map(this.templateCard)}
        </Grid>
    );
  }
}

export default OptionCard;