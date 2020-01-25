import React, { Component } from 'react';

export default class SkillForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      rewardRate: ''
    }
  }
  render() {
    return (
      <div id="skill-form" className="component dog-card">
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Add Dog"/>
        </form>
      </div>
    );
  }
}
