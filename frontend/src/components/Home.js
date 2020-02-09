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
    console.log(window.innerWidth)
    //calculate how many bones will fill the screen across, add one
    //calculate height of h1 field by vh
    //calculate how many rows of bones will be needed, add one

    return(
      <>

        <img src={boneOutline} alt="bone-outline" className="move-up"/>
        <img src={boneOutline} alt="bone-outline" className="move-down"/>
        <img src={boneOutline} alt="bone-outline" className="move-up"/>
        <img src={boneOutline} alt="bone-outline" className="move-down"/>
        <img src={boneOutline} alt="bone-outline" className="move-up"/>
        <img src={boneOutline} alt="bone-outline" className="move-down"/>
        <img src={boneOutline} alt="bone-outline" className="move-up"/>
        <img src={boneOutline} alt="bone-outline" className="move-down"/>
        <img src={boneOutline} alt="bone-outline" className="move-up"/>
        <img src={boneOutline} alt="bone-outline" className="move-down"/>
        <img src={boneOutline} alt="bone-outline" className="move-up"/>
        <img src={boneOutline} alt="bone-outline" className="move-down"/>
        <img src={boneOutline} alt="bone-outline" className="move-up"/>
        <img src={boneOutline} alt="bone-outline" className="move-down"/>
        <img src={boneOutline} alt="bone-outline" className="move-up"/>
        <img src={boneOutline} alt="bone-outline" className="move-down"/>
      </>
    )
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
