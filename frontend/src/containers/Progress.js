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
    const filteredNotes = notes.filter(n => dogIds.includes(n.dog_id));

    let r = [];
    let firstDate;
    for (let i = 0; i < filteredNotes.length; i++) {
      let note = filteredNotes[i];
      let currentDate = note.timestamp.split(' - ')[0];
      if (currentDate !== firstDate) {
        firstDate = currentDate;
        let dateDiv = (
          <div key={currentDate} className="light">
            <p className="little">{currentDate}</p><hr/>
          </div>
        )
        r.push(dateDiv);
      }
      r.push(
        <Link key={note.id} to={`/dogs/${note.dog_id}`}>
          <Note key={note.id} note={note} />
        </Link>
      );
    }

    return r;
  }

  render() {
    return(
      <div>
        <NavBar />
        <div className="note-links-container">
          <div className="notes content-card">
            {this.renderNoteLinks(this.props.notes)}
          </div>
        </div>
        <div className="note-stats-accent">
          <div className="note-stats">
            <h3>Pack Progress</h3>
            <p>stat</p>
            <p>stat</p>
            <p>stat</p>
            <p>stat</p>
          </div>
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
