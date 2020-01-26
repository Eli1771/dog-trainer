import React, { Component } from 'react';
import moment from 'moment';

export default class NoteForm extends Component {
  constructor() {
    super();
    this.state = {
      content: '',
    }
  }

  handleChange = e => {
    
  }

  handleSubmit = e => {
    e.preventDefault();

  }

  render() {
    const { content } = this.state;
    return (
      <div id="note-form" className="component">
        <form onSubmit={this.handleSubmit}>
          <label>Add a note: </label>
          <input
            type="text"
            name="content"
            value={content}
            onChange={this.handleChange}
          />

          <input type="submit" value="Save"/>

        </form>
      </div>
    );
  }
}
