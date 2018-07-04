import React, { Component } from 'react';
import {Grid,CssBaseline} from '@material-ui/core'
import Header from './Header'
import GreetingsBlock from './GreetingBlock'

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline/>
        <Header/>
        <Grid container spacing={16} style={{marginTop: '15vh'}}>
          <Grid item xs={12}>
            <GreetingsBlock/>
          </Grid>
        </Grid>
        </div>
    );
  }
}

export default App;
