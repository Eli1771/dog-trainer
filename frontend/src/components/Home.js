import React from 'react';
import { Link } from 'react-router-dom';

export const Home = props => {
  const transitionOut = () => {
    document.querySelector('h1').classList.add('testing');
  }

  const delay = path => {
    transitionOut();
    setTimeout(() => {window.location = '/dogs'}, 2000);
  }

  return(
    <div className="welcome">
      <h1>Workin Dog</h1>
      <div className='welcome-navs'>
        <Link onClick={delay}>View Your Dogs</Link>
        <Link to='/log'>View Your Progress</Link>
      </div>
    </div>
  );
}
