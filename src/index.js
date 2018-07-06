import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {HashRouter, Route} from 'react-router-dom'
import './index.css'

ReactDOM.render(
<HashRouter>
    <Route component={App}/>
</HashRouter>
, document.getElementById('root'));
