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
import { Home } from './components/Home';

function App() {
  const animateLoad = () => {
    let nodes = document.querySelectorAll('.preload');
    setTimeout(() => {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].classList.remove('preload');
      }
    }, 600);
  }

  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/dogs' render={routerProps => <Dogs {...routerProps} animateLoad={animateLoad}/>} />
        <Route path='/log' render={() => <Progress animateLoad={animateLoad}/>} />
      </div>
    </ Router>
  );
}

export default connect(null, { fetchDogs })(App);
