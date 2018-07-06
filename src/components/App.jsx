import React, { Component } from 'react';
import {CssBaseline} from '@material-ui/core'
import { Route} from 'react-router-dom'
import Header from './Header'
import MainPage from './view/MainPage'
import StartPracticePage from './view/StartPracticePage'


class App extends Component {
  render() {
    return (
      <div>
          <CssBaseline/>
          <Header/>
          <Route exact path='/' render={() => <MainPage/>}/>
          <Route path='/rozpocznij-trening' render={() => <StartPracticePage/>}/>
      </div>
    );
  }
}

export default App;
