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
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
    e.target.value = this.state[e.target.name];
  }

  handleSubmit = e => {
    e.preventDefault();
    const content = this.state.content;
    const timestamp = moment().format('ddd, MMM Do - h:mm a');
    console.log('timestamp: ', timestamp)
    this.props.addNote({
      content: content,
      timestamp: timestamp
    });
    this.setState({
      content: ''
    });
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
