import React, { Component } from 'react';
import {CssBaseline} from '@material-ui/core'
import { Route } from 'react-router-dom'
import Header from './Header'
import MainPage from './view/MainPage'
import StartPracticePage from './view/StartPracticePage'
import FinishWorkoutPage from './view/FinishWorkoutPage'
import WorkoutSummaryPage from './view/WorkoutSummaryPage'


class App extends Component {
  render() {
    return (
      <div>
          <CssBaseline/>
          <Header/>
          <Route exact path='/' render={() => <MainPage/>}/>
          <Route path='/rozpocznij-trening' render={() => <StartPracticePage/>}/>
          <Route path='/koniec-treningu' render={() => <FinishWorkoutPage/>}/>
          <Route path='/podsumowanie-treningu' render={() => <WorkoutSummaryPage/>}/>
      </div>
    );
  }
}

export default App;
