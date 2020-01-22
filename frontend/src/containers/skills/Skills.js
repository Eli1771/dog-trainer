import React, { Component } from 'react';
import { connect } from 'react-redux';

import Skill from './Skill';
import { fetchSkills, fetchDogs } from '../../actions/dogs';

class Skills extends Component {
  componentDidMount() {
    this.props.fetchSkills();
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
      <div>
        <h3>Skills</h3>
        {this.renderSkills(filteredSkills)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    skills: state.skills
  }
}

export default connect(mapStateToProps, { fetchDogs, fetchSkills })(Skills);


// return dogs.map(dog => {
//   return <Dog key={dog.id} dog={dog} removeDog={this.props.removeDog} />
// });
