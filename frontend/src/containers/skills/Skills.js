import React, { Component } from 'react';
import { connect } from 'react-redux';
import Skill from './Skill';

export default class Skills extends Component {
  render() {
    const filteredSkills = skills.filter(s => s.dogId = this.props.dogId);
    console.log(filteredSkills)
    return(
      <div>{}</div>
    );
  }
}
