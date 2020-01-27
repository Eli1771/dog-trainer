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

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
    e.target.value = this.state[e.target.name];
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, description, rewardRate } = this.state;
    this.props.addSkill(
      {
        name: name,
        description: description,
        reward_rate: rewardRate,
        dog_id: this.props.dog.id
      }, this.props.dog
    );
    this.setState({
      name: '',
      description: '',
      rewardRate: ''
    });
  }

  handleCancel = e => {
    e.preventDefault();
    this.props.hideForm();
  }

  render() {
    const { name, description, rewardRate } = this.state;
    return (
      <div id="skill-form" className="component">
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
          <select
            name="rewardRate"
            value={rewardRate}
            onChange={this.handleChange}>
            {this.props.renderRewardRates()}
          </select>

          <input type="submit" value="Add Skill"/>

          <button onClick={this.handleCancel}>Cancel</button>

        </form>
      </div>
    );
  }
}
