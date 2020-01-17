import React, { Component } from 'react';
import { connect } from 'react-redux';
import Skill from './Skill';

class Skills extends Component {
  render() {
    const { skills, dogId } = this.props
    const filteredSkills = skills.filter(s => s.dogId = dogId);
    console.log(filteredSkills)
    return(
      <div>
        <h3>Skills, dog id: {dogId}</h3>
        {filteredSkills.map(skill => <Skill key={skill.id} skill={skill} />)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    skills: state.skills
  }
}

export default connect(mapStateToProps)(Skills);
