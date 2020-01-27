import React, { Component } from 'react';

export default class Skill extends Component {
  rewardRates = ['-','Every Time', 'Every Other Time', 'Every third Time', 'Every Several Times', 'Seldom/Randomly'];

  skillId = this.props.skill.id;

  editRate = e => {
    e.target.classList.add('hidden');
    document.querySelector(`._${this.skillId}.remove-skill`).classList.add('hidden');
    document.querySelector(`._${this.skillId}.select-rate`).classList.remove('hidden');
    document.querySelector(`._${this.skillId}.update-rate`).classList.remove('hidden');
  }

  updateRate = e => {
    console.log('updating!');
    e.target.classList.add('hidden');
    document.querySelector(`._${this.skillId}.select-rate`).classList.add('hidden');
    document.querySelector(`._${this.skillId}.edit-rate`).classList.remove('hidden');
    document.querySelector(`._${this.skillId}.remove-skill`).classList.remove('hidden');

    const newRate = document.querySelector(`._${this.skillId}.select-rate`).value;
    if (newRate !== '0') {
      const rateString = this.rewardRates[newRate];
      this.props.editSkill(this.props.skill, newRate, this.props.dogName, rateString);
    }
  }

  handlePractice = e => {
    console.log(`practicing ${this.props.skill.name}!`);
    // this.props.autoAddNote(this.props.dogName, this.props.skill.name);
  }

  handleDelete = e => {
    e.preventDefault();
    if (window.confirm('Delete skill?')) {
      this.props.removeSkill(this.props.skill.id);
    }
  }

  render() {
    const skill = this.props.skill
    return(
      <div className="skill">
        <h2>{skill.name}</h2>
        <p>{skill.description}</p>
        <p>{this.rewardRates[skill.reward_rate]}</p>
        <button
          className='practice-skill'
          onClick={this.handlePractice}
        >Practice {skill.name}!</button>
        <button
          className={`_${skill.id} edit-rate`}
          onClick={this.editRate}
        >Change</button>
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
    )
  }
}
