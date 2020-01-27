import React, { Component } from 'react';
import { connect } from 'react-redux';

import NoteForm from '../../components/notes/NoteForm';
import Note from '../../components/notes/Note';
import { addNote } from '../../actions/notes';

class Notes extends Component {
  renderNotes = notes => {
    console.log('attempting to render notes!')
    return notes.map(note => {
      return <Note key={note.id} note={note} />
    })
  }

  render() {
    console.log('all notes: ', this.props.notes);
    return(
      <div className="notes-container">
        <h3>Progress Log</h3>
        {this.renderNotes(this.props.notes)}
        <NoteForm addNote={this.props.addNote} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes.notes
  }
}

export default connect(mapStateToProps, { addNote })(Notes);
