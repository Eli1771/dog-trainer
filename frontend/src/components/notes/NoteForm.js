import React, { Component } from 'react';

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
    const note = {
      content: this.state.content,
      dog_id: this.props.dogId
    }
    this.props.addNote(note);
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
