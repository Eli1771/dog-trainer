import React, { Component } from 'react';

import Dog from '../../components/dogs/Dog';
import { DogsSidebar } from './DogsSidebar';
import Skills from '../skills/Skills';

export default class DogShow extends Component {
  render() {
    const { dogs, match } = this.props;
    const dog = dogs.find(dog => dog.id.toString() === match.params.dogId.toString());
    console.log('dog: ', dog);
    return(
      <div>
        <Dog dog={dog} />
        <Skills dogId={dog.id} />
        <DogsSidebar dogs={dogs} currentDogId={dog.id} />
      </div>
    );
  }
}
