import React from 'react';

const DogFormButton = props => {
  const showForm = () => {
    props.toggleDogForm();
  }

  return(
    <div className="dog-card" onClick={showForm}>
      <h4>Add New Pet</h4>
      <div id="plus-sign">+</div>
    </div>
  )
}

export default DogFormButton;
