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

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
    e.target.value = this.state[e.target.name];
  }

  render() {
    const { name, breed, dob } = this.state;
    return (
      <div id="dog-form" className="component">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <input type="submit" value="Add Dog"/>
        </form>
      </div>
    );
  }
}
