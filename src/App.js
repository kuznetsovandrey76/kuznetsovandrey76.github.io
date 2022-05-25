import React from 'react';
// We should use HashRouter for work with gh-pages
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import {
    HomePage,
  } from './components/pages';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  return (
    <Router>
        <Switch>
            <Route path={['/home', '/']} exact={true} component={HomePage} />
        </Switch>
    </Router>
  );
}

export default App;
