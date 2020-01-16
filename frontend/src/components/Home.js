import React from 'react';
import { Link } from 'react-router-dom';

export const Home = props => {
  return(
    <div>
      <h1>Home</h1>
      <Link to='/dogs'>View Your Dogs</Link>
      <Link to='/log'>View Your Progress</Link>
    </div>
  );
}
