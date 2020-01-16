import React from 'react';
import { Link } from 'react-router-dom';

const Dog = props => {
  const { name, breed, dob, id } = props.dog;

  const handleDelete = e => {
    e.preventDefault();
    if (window.confirm(`Remove ${name} from your records?`)) {
      props.removeDog(id);
    }
  }

  const renderDelete = () => {
    return !!props.removeDog ? <button onClick={handleDelete}>Delete</button> : null
  }

  return(
    <Link to={`/dogs/${id}`}>
      <div className="component">
        <h1>{name}</h1>
        <p>{dob} - {breed}</p>
        {renderDelete()}
      </div>
    </Link>
  );
}

export default Dog;
