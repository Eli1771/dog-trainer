import React, { Component } from 'react';

export default class Skill extends Component {
  render() {
    const skill = this.props.skill
    return(
      <div className="skill">
        <h2>{skill.name}</h2>
        <p>{skill.description} - {skill.reward_rate}</p>
      </div>
    )
  }
}
