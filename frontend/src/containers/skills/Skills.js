import React, { Component } from 'react';
import { connect } from 'react-redux';

import Skill from '../../components/skills/Skill';
import SkillForm from '../../components/skills/SkillForm';
import { autoAddNote } from '../../actions/notes';
import {
  addSkill,
  editSkill,
  removeSkill,
  fetchSkills,
} from '../../actions/skills';

class Skills extends Component {
  componentDidMount() {
    if (!this.props.skills.length) {
      this.props.fetchSkills();
    }
  }

  revealForm = () => {
    document.querySelector('.skill-form-button').classList.add('hidden');
    document.querySelector('.skill-form').classList.remove('hidden');
  }

  hideForm = () => {
    document.querySelector('.skill-form').classList.add('hidden');
    document.querySelector('.skill-form-button').classList.remove('hidden');
  }

  renderSkills = skills => {
    return skills.map(skill => {
      return <Skill
        key={skill.id}
        skill={skill}
        renderRewardRates={this.renderRewardRates}
        editSkill={this.props.editSkill}
        removeSkill={this.props.removeSkill}
        dog={this.props.dog}
        autoAddNote={this.props.autoAddNote}/>
    });
  }

  renderRewardRates = () => {
    const rewardRates = ['-','Every Time', 'Every Other Time', 'Every third Time', 'Every Several Times', 'Seldom/Randomly'];
    return rewardRates.map((rate, idx) => {
      return <option key={idx} value={idx}>{rate}</option>
    });
  }

  render() {
    const { skills, dog } = this.props
    const filteredSkills = skills.filter(s => s.dog_id === dog.id);
    return(
      <div className="skills-container">
        <h3>Skills</h3>
        <div className="skill-form-button" onClick={this.revealForm}>
          <p>Add a new skill!</p>
        </div>
        <div className="skill-form dog-card hidden">
          <SkillForm
            addSkill={this.props.addSkill}
            dog={dog}
            renderRewardRates={this.renderRewardRates}
            hideForm={this.hideForm}
          />
        </div>
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

export default connect(mapStateToProps, {
  addSkill,
  editSkill,
  removeSkill,
  fetchSkills,
  autoAddNote
})(Skills);
