import React from 'react';
import { Link } from 'react-router-dom';
import boneOutline from '../images/bone-outline.jpg';

export const Home = props => {
  const transitionOut = () => {
    document.querySelector('.welcome-navs').classList.add('transitioning');
    document.querySelector('h1').classList.add('transitioning');
  }

  const delay = path => {
    transitionOut();
    setTimeout(() => {window.location = path}, 830);
  }

  const renderBackground = () => {
    //calculate how many bones will fill the screen across, add one
    let across = Math.ceil((window.innerWidth / 200) + 3);
    //calculate height of h1 field by vh
    let height = Math.ceil((window.innerHeight*0.39));
    let down = Math.ceil((height / 200) + 3);
    //calculate how many rows of bones will be needed, add one
    const upOrDown = ['up', 'down'];
    let r = []
    for (let i = 0; i < down; i++) {
      let offset = 0
      //if even number in each row, offset is always 0
      if (across % 2 === 1) {
        offset = i;
      }

      for (let j = 0; j < across; j++) {
        let k = j + offset;
        let dir = k > 1 ? upOrDown[k % 2] : upOrDown[k];
        r.push(<img src={boneOutline} alt="bone-outline" className={`move-${dir}`}/>);
      }
    }

    return r;
  }



  return(
    <div className="welcome">
      <div className="header-field">
        {renderBackground()}
        <h1>Workin Dog</h1>
      </div>
      <div className='welcome-navs'>
        <Link onClick={() => delay('/dogs')}>View Your Dogs</Link>
        <Link onClick={() => delay('/log')}>View Your Progress</Link>
      </div>
    </div>
  );
}
