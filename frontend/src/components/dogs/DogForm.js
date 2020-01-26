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

  handleCancel = () => {
    this.props.toggleDogForm();
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
    e.target.value = this.state[e.target.name];
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, breed, dob } = this.state;
    this.props.addDog({
      name: name,
      breed: breed,
      dob: dob
    });
    this.setState({
      name: '',
      breed: '',
      dob: ''
    });
  }

  render() {
    const { name, breed, dob } = this.state;
    return (
      <div id="dog-form" className="component dog-card">
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />

          <label>Breed</label>
          <input
            type="text"
            name="breed"
            value={breed}
            onChange={this.handleChange}
          />

          <label>Date of Birth</label>
          <input
            type="text"
            name="dob"
            placeholder="mm-dd-yyyy"
            value={dob}
            onChange={this.handleChange}
          />

          <input type="submit" value="Add Dog"/>

          <input
            type="button"
            value="cancel"
            onClick={this.handleCancel}
          />
        </form>
      </div>
    );
  }
}
