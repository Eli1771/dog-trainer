import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Dogs from './containers/dogs/Dogs';
import Progress from './containers/Progress';
import { fetchDogs } from './actions/dogs';
import Home from './components/Home';

function App() {

  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/dogs' render={routerProps => <Dogs {...routerProps}/>} />
        <Route path='/log' render={routerProps => <Progress/>} />
      </div>
    </ Router>
  );
}

export default connect(null, { fetchDogs })(App);
