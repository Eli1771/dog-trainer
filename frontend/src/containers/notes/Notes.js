import React, { Component } from 'react';

import NoteForm from '../../components/notes/NoteForm';

export default class Notes extends Component {
  render() {
    return(
      <div className="notes-container">
        <h3>Progress Log</h3>
        <NoteForm />
      </div>
    )
  }
}
