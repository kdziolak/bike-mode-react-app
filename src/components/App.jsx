import React, { Component } from 'react';
import {CssBaseline} from '@material-ui/core'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import MainPage from './layout/MainPage'
import StartPracticePage from './layout/StartPracticePage'
import FinishWorkoutPage from './layout/FinishWorkoutPage'
import WorkoutSummaryPage from './layout/WorkoutSummaryPage'
import WorkoutsResultsPage from './layout/WorkoutsResultsPage'



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
        <Switch>
          <Route exact path='/wyniki-treningow' render={() => <WorkoutsResultsPage/>} />
          <Route path='/wyniki-treningow/trening/:id' render={() => <MainPage/>}/>
        </Switch>
        
      </div>
    );
  }
}

export default App;