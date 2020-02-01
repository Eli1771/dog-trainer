import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { NavBar } from '../components/NavBar';
import Note from '../components/notes/Note';
import { fetchNotes } from '../actions/notes';

class Progress extends Component {

  componentDidMount() {
    if (!this.props.notes.length) {
      this.props.fetchNotes();
    }
  }

  renderNoteLinks = notes => {
    return notes.map(note => {
      return(
        <Link key={note.id} to={`/dogs/${note.dog_id}`}>
          <Note note={note} />
        </Link>
      )
    });
  }

  render() {
    return(
      <div>
        <NavBar />
        <div>Progress Log</div>
        <div className='note-links-container'>
          {this.renderNoteLinks(this.props.notes)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes.notes
  }
}

export default connect(mapStateToProps, { fetchNotes })(Progress);
