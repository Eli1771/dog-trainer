import React, { Component } from 'react';

import Dog from '../../components/dogs/Dog';
import { DogsSidebar } from './DogsSidebar'

export default class DogShow extends Component {
  render() {
    const { dogs, match } = this.props;
    const dog = dogs.find(dog => dog.id === parseInt(match.params.dogId));
    console.log('dog: ', dog);
    return(
      <div>
        <Dog dog={dog} />
        <DogsSidebar dogs={dogs} currentDogId={dog.id} />
      </div>
    );
  }
}
