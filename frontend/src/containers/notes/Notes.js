import React, { Component } from 'react';
import { connect } from 'react-redux';

import NoteForm from '../../components/notes/NoteForm';
import { addNote } from '../../actions/notes';

class Notes extends Component {
  // renderNotes = notes => {
  //   return notes.map()
  // }

  render() {
    console.log('all notes: ', this.props.notes);
    return(
      <div className="notes-container">
        <h3>Progress Log</h3>
        <NoteForm addNote={addNote} />
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
