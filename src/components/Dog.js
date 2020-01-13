import React, { Component } from 'react';

export default class Dog extends Component {
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
      
    );
  }
}
