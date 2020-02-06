import React from 'react';

import Dog from '../../components/dogs/Dog';

export const DogsSidebar = props => {
  const { dogs, currentDogId } = props;
  const filteredDogs = dogs.filter(dog => dog.id !== currentDogId);
  const sortedDogs = filteredDogs.sort((a, b) => a.name < b.name ? -1 : 1);
  return(
    <div className="dogs-sidebar">
      {sortedDogs.map(dog => <Dog key={dog.id} dog={dog} />)}
    </div>
  );
}
