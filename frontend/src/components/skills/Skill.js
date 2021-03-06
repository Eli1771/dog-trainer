import React, { Component } from 'react';

export default class Skill extends Component {
  rewardRates = ['-','Every Time', 'Every Other Time', 'Every Third Time', 'Every Several Times', 'Seldom/Randomly'];

  skillId = this.props.skill.id;

  editRate = e => {
    e.target.classList.add('hidden');
    document.querySelector(`._${this.skillId}.remove-skill`).classList.add('hidden');
    document.querySelector(`._${this.skillId}.select-rate`).classList.remove('hidden');
    document.querySelector(`._${this.skillId}.update-rate`).classList.remove('hidden');
  }

  updateRate = e => {
    e.target.classList.add('hidden');
    document.querySelector(`._${this.skillId}.select-rate`).classList.add('hidden');
    document.querySelector(`._${this.skillId}.edit-rate`).classList.remove('hidden');
    document.querySelector(`._${this.skillId}.remove-skill`).classList.remove('hidden');

    const newRate = document.querySelector(`._${this.skillId}.select-rate`).value;
    if (newRate !== '0' && newRate !== this.props.skill.reward_rate.toString()) {
      const rateString = this.rewardRates[newRate];
      this.props.editSkill(this.props.skill, newRate, this.props.dog, rateString);
    }
  }

  handlePractice = e => {
    this.props.autoAddNote(this.props.dog, this.props.skill.name);
  }

  handleDelete = e => {
    e.preventDefault();
    if (window.confirm('Delete skill?')) {
      this.props.removeSkill(this.props.skill.id);
    }
  }

  render() {
    const skill = this.props.skill
    console.log('obj from db: ', skill)
    return(
      <div className="skill content-card">
        <h2>{skill.name}</h2>
        <p>{skill.description}</p>
        <p>Receives reinforcement {this.rewardRates[skill.reward_rate].toLowerCase()}</p>
        <div className="skill-buttons">
          <button
            className='practice-skill'
            onClick={this.handlePractice}
          >Practice {skill.name}!</button>
          <button
            className={`_${skill.id} edit-rate`}
            onClick={this.editRate}
          >Change Rate</button>
          <select className={`_${skill.id} select-rate hidden`}>
            {this.props.renderRewardRates()}
          </select>
          <button
            onClick={this.updateRate}
            className={`_${skill.id} update-rate hidden`}
          >Save</button>
          <button
            className={`_${skill.id} remove-skill`}
            onClick={this.handleDelete}
          >Delete</button>
        </div>
      </div>
    )
  }
}
