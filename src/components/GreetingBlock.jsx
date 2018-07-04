import React, { Component } from 'react';
import {Typography} from '@material-ui/core';

class GreetingsBlock extends Component {
  render() {
    return (
    <div>
        <Typography variant='display1' align='center'><strong>Witaj nieznajomy!</strong></Typography>
        <Typography variant='headline' align='center'>Może mała przejażdżka?</Typography>
    </div>
    );
  }
}

export default GreetingsBlock;
