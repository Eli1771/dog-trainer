import React from 'react';
import { Link } from 'react-router-dom';

export const Home = props => {
  const transitionOut = () => {
    document.querySelector('h1').classList.add('testing');
  }

  return(
    <div className="welcome">
      <h1>Workin Dog</h1>
      <Link to={setTimeout(() => {window.location = '/dogs'}, 3000)} onClick={transitionOut}>View Your Dogs</Link>
      <Link to='/log'>View Your Progress</Link>
    </div>
  );
}
