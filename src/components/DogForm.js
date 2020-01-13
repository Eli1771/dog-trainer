import React, { Component } from 'react';

export default class DogForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      breed: '',
      dob: ''
    }
  }

  render() {
    const { name, breed, dob } = this.state;
    return (
      <div id="dog-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={this.handleChange}
          />
          <input type="submit" value="Add Dog"/>
        </form>
      </div>
    );
  }
}
