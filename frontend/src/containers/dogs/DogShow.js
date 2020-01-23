import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchDogs } from '../../actions/dogs';
import DogHeader from '../../components/dogs/DogHeader';
import { DogsSidebar } from './DogsSidebar';
import Skills from '../skills/Skills';

class DogShow extends Component {

  // componentDidMount() {
  //   this.props.fetchDogs()
  // }

  render() {
    const { dogs, match } = this.props;
    const dog = dogs.find(dog => dog.id.toString() === match.params.dogId.toString());
    console.log('dog: ', dog);
    return(
      <div className="dog-show">
        <DogHeader dog={dog} />
        <Skills dogId={dog.id} />
        <DogsSidebar dogs={dogs} currentDogId={dog.id} />
      </div>
    );
  }
}

export default connect(null, { fetchDogs })(DogShow);
