import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { NavBar } from '../components/NavBar';
import Note from '../components/notes/Note';
import { fetchNotes } from '../actions/notes';
import { fetchDogs } from '../actions/dogs';

class Progress extends Component {

  componentDidMount() {
    if (!this.props.notes.length) {
      this.props.fetchNotes();
    }
    if (!this.props.dogs.length) {
      this.props.fetchDogs();
    }
  }

  renderNoteLinks = notes => {
    const dogIds = this.props.dogs.map(d => d.id);
    console.log('dog ids: ', dogIds);
    const filteredNotes = notes.filter(n => dogIds.includes(n.dog_id));
    console.log('filtered...', filteredNotes);
    return filteredNotes.map(note => {
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
    notes: state.notes.notes,
    dogs: state.dogs.dogs
  }
}

export default connect(mapStateToProps, { fetchNotes, fetchDogs })(Progress);
