import React, { Component } from 'react';
import { connect } from 'react-redux';

import Skill from './Skill';
import { fetchDogs } from '../../actions/dogs';
import { fetchSkills } from '../../actions/skills';

class Skills extends Component {
  componentDidMount() {
    console.log('no skills? ', !this.props.skills.length);
    if (!this.props.skills.length) {
      console.log('fetching skills');
      this.props.fetchSkills();
    }
  }

  renderSkills = skills => {
    return skills.map(skill => {
      return <Skill key={skill.id} skill={skill} />
    });
  }

  render() {
    const { skills, dogId } = this.props
    const filteredSkills = skills.filter(s => s.dog_id === dogId);
    return(
      <div className="skills-container">
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

export default connect(mapStateToProps, { fetchDogs, fetchSkills })(Skills);


// return dogs.map(dog => {
//   return <Dog key={dog.id} dog={dog} removeDog={this.props.removeDog} />
// });
