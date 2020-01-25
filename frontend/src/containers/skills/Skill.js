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
        <p>{skill.reward_rate}</p>
        <button
          onClick={this.editRate}
        >Change</button>
        <select className="hidden">
          <option value="1">Every Time</option>
          <option value="2">Every Other Time</option>
        </select>
        <button
          onclick={this.updateRate}
          className="hidden"
        >Save</button>
      </div>
    )
  }
}
