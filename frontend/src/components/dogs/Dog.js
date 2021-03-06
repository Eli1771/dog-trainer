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
    return !!props.removeDog ? <button className="light" onClick={handleDelete}>Delete</button> : null
  }

  return(
    <Link to={`/dogs/${id}`}>
      <div className="dog-card content-card">
        <h3>{name}</h3>
        <h4>{breed}</h4>
        <p className="light">Born {dob}</p>
        {renderDelete()}
      </div>
    </Link>
  );
}

export default Dog;
