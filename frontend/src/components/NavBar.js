import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = props => {
  return(
    <div id="navbar">
      <div>
        <Link to='/dogs'>All Dogs</Link>
      </div>
      <div>
        <Link to='/log'>Progress</Link>
      </div>
    </div>
  );
}
