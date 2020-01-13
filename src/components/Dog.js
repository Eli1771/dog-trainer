import React from 'react';

const Dog = props => {
  const { name, breed, dob, id } = props.dog;


  return(
    <div className="component">
      <h1>{name}</h1>
      <p>{dob} - {breed}</p>
      <button
        onClick={() => props.removeDog(id)}
      >Delete</button>
    </div>
  );
}

export default Dog;
