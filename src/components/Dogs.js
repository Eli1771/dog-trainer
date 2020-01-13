import React, { Component } from 'react';
import DogForm from './DogForm';

export default class Dogs extends Component {
  render() {
    return(
      <div className="Dogs">
        All dogs
        <DogForm />
      </div>
    )
  }
}
