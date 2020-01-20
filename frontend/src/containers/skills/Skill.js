import React, { Component } from 'react';

export default class Skill extends Component {
  render() {
    return(
      <div>
        <h2>{this.props.skill.name}</h2>
      </div>
    )
  }
}
