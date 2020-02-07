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
    this.props.hideForm();
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

  //                          TABLE DIAGRAM
  //  +---------------------|---------------------|-----------------+
  //  |      nameLabel      |   nameInput         |                 |
  //  |---------------------+---------------------+-----------------|
  //  |   descriptionLabel  |  descriptionInput   |                 |
  //  |---------------------+---------------------+-----------------|
  //  |      rateLabel      |     rateSelect      |                 |
  //  |---------------------+---------------------+-----------------|
  //  |                     |                     | submit/cancel   |
  //  +---------------------|---------------------|-----------------+
  //

  render() {
    const { name, description, rewardRate } = this.state;
    return (
      <div id="skill-form">
        <form onSubmit={this.handleSubmit}>
          <table>
            <tr>
              <td>
                <label>Name</label>
              </td>

              <td>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                />
              </td>

              <td></td>
            </tr>

            <tr>
              <td>
                <label>Description</label>&emsp;
              </td>

              <td>
                <input
                  type="text"
                  name="description"
                  value={description}
                  placeholder="optional"
                  onChange={this.handleChange}
                />
              </td>

              <td></td>
            </tr>

            <tr>
              <td>
                <label>Reward Rate</label>&emsp;
              </td>

              <td>
                <select
                  name="rewardRate"
                  value={rewardRate}
                  onChange={this.handleChange}>
                  {this.props.renderRewardRates()}
                </select>
              </td>

              <td></td>
            </tr>

            <tr>
              <td></td>

              <td></td>

              <td>
                <input type="submit" value="Add Skill"/>
                <button onClick={this.handleCancel}>Cancel</button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}
