import React from 'react';

const DogFormButton = props => {
  const showForm = () => {
    props.toggleDogForm();
  }

  return(
    <div className="dog-card" onClick={showForm}>
      <p>Add New Pet</p>
    </div>
  )
}

export default DogFormButton;
