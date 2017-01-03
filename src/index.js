import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory} from 'react-router'
import 'bootswatch/yeti/bootstrap.min.css';

import Whiskey from './whiskey-app'
import Sandbox from './sandbox'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component = {Sandbox} />
    <Route path='/whiskeynotes' component = {Whiskey} />
  </Router>
), document.getElementById('root'));
