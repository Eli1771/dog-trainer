import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';
import Dogs from './containers/Dogs';
import Progress from './containers/Progress';
import { Home } from './components/Home';

function App() {

  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/dogs' render={routerProps => <Dogs/>} />
        <Route path='/log' render={routerProps => <Progress/>} />
      </div>
    </ Router>
  );
}

export default App;
