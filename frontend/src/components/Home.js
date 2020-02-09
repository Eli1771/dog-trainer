import React from 'react';
import { Link } from 'react-router-dom';

export const Home = props => {
  const transitionOut = () => {
    document.querySelector('.welcome-navs').classList.add('transitioning');
    document.querySelector('h1').classList.add('transitioning');
  }

  const delay = path => {
    transitionOut();
    setTimeout(() => {window.location = path}, 830);
  }

  return(
    <div className="welcome">
      <h1>Workin Dog</h1>
      <div className='welcome-navs'>
        <Link onClick={() => delay('/dogs')}>View Your Dogs</Link>
        <Link onClick={() => delay('/log')}>View Your Progress</Link>
      </div>
    </div>
  );
}
