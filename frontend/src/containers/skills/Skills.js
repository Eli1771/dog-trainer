import React, { Component } from 'react';
import { connect } from 'react-redux';

import Skill from './Skill';
import SkillForm from '../../components/skills/SkillForm';
import { fetchDogs } from '../../actions/dogs';
import { addSkill, fetchSkills } from '../../actions/skills';

class Skills extends Component {
  componentDidMount() {
    if (!this.props.skills.length) {
      this.props.fetchSkills();
    }
  }

  renderSkills = skills => {
    return skills.map(skill => {
      return <Skill key={skill.id} skill={skill} renderRewardRates={this.renderRewardRates}/>
    });
  }

  renderRewardRates = () => {
    const rewardRates = ['-','Every Time', 'Every Other Time', 'Every third Time', 'Every Several Times', 'Seldom/Randomly'];
    return rewardRates.map((rate, idx) => {
      return <option key={idx} value={idx}>{rate}</option>
    });
  }

  render() {
    console.log('current skills list: ', this.props.skills);
    const { skills, dogId } = this.props
    const filteredSkills = skills.filter(s => s.dog_id === dogId);
    return(
      <div className="skills-container">
        <h3>Add a new skill!</h3>
        <SkillForm
          addSkill={this.props.addSkill}
          dogId={dogId}
          renderRewardRates={this.renderRewardRates}/>
        <h3>Skills</h3>
        {this.renderSkills(filteredSkills)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    skills: state.skills.skills,
    loading: state.dogs.loading
  }
}

export default connect(mapStateToProps, { fetchDogs, addSkill, fetchSkills })(Skills);
