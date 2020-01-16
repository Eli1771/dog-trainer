import React from 'react';

const Dog = props => {
  const { name, breed, dob, id } = props.dog;

  const handleDelete = () => {
    if (window.confirm(`Remove ${name} from your records?`)) {
      props.removeDog(id);
    }
  }

  return(
    <div className="component">
      <h1>{name}</h1>
      <p>{dob} - {breed}</p>
      <button
        onClick={handleDelete}
      >Delete</button>
    </div>
  );
}

export default Dog;
