import React from 'react';

const DogHeader = props => {
  const { name, breed, dob } = props.dog;

  return(
    <div className="dog-header">
      <h1>{name}</h1>
      <p>{dob} - {breed}</p>
    </div>
  );
}

export default DogHeader;
