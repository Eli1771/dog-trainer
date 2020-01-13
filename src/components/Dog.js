import React from 'react';

const Dog = props => {
  const { name, breed, dob } = props.dog
  return(
    <div className="component">
      <h1>{name}</h1>
      <p>{dob} - {breed}</p>
    </div>
  );
}

export default Dog;
