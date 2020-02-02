import React from 'react';

import Dog from '../../components/dogs/Dog';

export const DogsSidebar = props => {
  const { dogs, currentDogId } = props;
  const filteredDogs = dogs.filter(dog => dog.id !== currentDogId);
  return(
    <div className="dogs-sidebar">
      {filteredDogs.map(dog => <Dog key={dog.id} dog={dog} />)}
    </div>
  );
}
