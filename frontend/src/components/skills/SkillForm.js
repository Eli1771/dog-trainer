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
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />

          <label>Description</label>
          <input
            type="text"
            name="description"
            value={description}
            placeholder="optional"
            onChange={this.handleChange}
          />

          <label>Reward Rate</label>
          <input
            type="text"
            name="rewardRate"
            value={rewardRate}
            onChange={this.handleChange}
          />

          <input type="submit" value="Add Skill"/>
        </form>
      </div>
    );
  }
}
