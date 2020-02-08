import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return(
      <div className="welcome">
        <h1>Workin Dog</h1>
        <Link to='/dogs'>View Your Dogs</Link>
        <Link to='/log'>View Your Progress</Link>
      </div>
    );
  }
}
