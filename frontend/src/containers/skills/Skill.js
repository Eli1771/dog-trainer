import React, { Component } from 'react';

export default class Skill extends Component {

  rewardRates = ['-','Every Time', 'Every Other Time', 'Every third Time', 'Every Several Times', 'Seldom/Randomly'];

  skillId = this.props.skill.id;

  renderRewardOptions = () => {
    return this.rewardRates.map((rate, idx) => {
      return <option key={idx} value={idx}>{rate}</option>
    });
  }

  editRate = e => {
    e.target.classList.add('hidden');
    document.querySelector(`._${this.skillId}.select-rate`).classList.remove('hidden');
    document.querySelector(`._${this.skillId}.update-rate`).classList.remove('hidden');
  }

  updateRate = e => {
    e.target.classList.add('hidden');
    document.querySelector(`._${this.skillId}.select-rate`).classList.add('hidden');
    document.querySelector(`._${this.skillId}.edit-rate`).classList.remove('hidden');

    if (!e.target.value === 0) {
      console.log('attempting to update state!');
      //send callback prop to update state
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
          className={`_${skill.id} edit-rate`}
          onClick={this.editRate}
        >Change</button>
        <select className={`_${skill.id} select-rate hidden`}>
          {this.renderRewardOptions()}
        </select>
        <button
          onClick={this.updateRate}
          className={`_${skill.id} update-rate hidden`}
        >Save</button>
      </div>
    )
  }
}
