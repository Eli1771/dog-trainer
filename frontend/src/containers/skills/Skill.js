import React, { Component } from 'react';

export default class Skill extends Component {

  rewardRates = ['Every Time', 'Every Other Time', 'Every third Time', 'Every Several Times', 'Seldom/Randomly'];

  renderRewardOptions = () => {
    return this.rewardRates.map((rate, idx) => {
      return <option value={idx + 1}>{rate}</option>
    });
  }

  }

  render() {
    const skill = this.props.skill
    return(
      <div className="skill">
        <h2>{skill.name}</h2>
        <p>{skill.description}</p>
        <p>{this.rewardRates[skill.reward_rate - 1]}</p>
        <button
          className={`_${skill.id} edit-rate`}
          onClick={this.editRate}
        >Change</button>
        <select className={`_${skill.id} select-rate hidden`}>
          {this.renderRewardOptions()}
        </select>
        <button
          onclick={this.updateRate}
          className={`_${skill.id} update-rate hidden`}
        >Save</button>
      </div>
    )
  }
}
