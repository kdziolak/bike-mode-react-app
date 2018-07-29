import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom'
import store from './store';
import './index.css'


ReactDOM.render(
<Provider store={store}>
    <HashRouter>
        <Route component={App}/>
    </HashRouter>
</Provider>
, document.getElementById('root'));
