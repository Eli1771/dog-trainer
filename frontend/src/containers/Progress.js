import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { NavBar } from '../components/NavBar';
import Note from '../components/notes/Note';
import { fetchNotes } from '../actions/notes';
import { fetchDogs } from '../actions/dogs';

class Progress extends Component {

  componentDidMount() {
    let nodes = document.querySelectorAll('.preload')

    if (!this.props.notes.length) {
      this.props.fetchNotes();
    }
    if (!this.props.dogs.length) {
      this.props.fetchDogs();
    }

    setTimeout(() => {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].classList.remove('preload');
      }
    }, 600)
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

  renderNoteStats = () => {
    const { notes, dogs } = this.props;

    if (!!notes.length && !!dogs.length) {
      const lastTrained = dogs.filter(d => d.id === notes[notes.length -1].dog_id)[0];
      const sortedByDog = notes.sort((a, b) => a.dog_id - b.dog_id);
      let mostTrained;

      let sbdSubarrays = [];
      let curr_id;
      for (let i = 0; i < sortedByDog.length; i++) {
        if (curr_id !== sortedByDog[i].dog_id) {
          let arr = [sortedByDog[i]];
          sbdSubarrays.unshift(arr);
          curr_id = sortedByDog[i].dog_id;
        } else {
          sbdSubarrays[0].push(sortedByDog[i]);
        }
      }
      const mostTrainedIdx = sbdSubarrays.sort((a, b) => b.length - a.length)[0][0].dog_id;
      mostTrained = dogs.find(d => d.id === mostTrainedIdx);

      return (
          <div className="note-stats">
            <h3>Pack Progress</h3>
            <p>{notes.length} Actions Logged</p>
            <p>Your latest training session was with {lastTrained.name}</p>
            {!!mostTrained ? <p>{mostTrained.name} has received the most training</p> : null}
          </div>

      )
    }
  }

  render() {
    return(
      <div>
        <NavBar />
        <div className="note-links-container preload">
          <div className="notes content-card">
            {this.renderNoteLinks(this.props.notes)}
          </div>
        </div>
        <div className="note-stats-accent preload">
          {this.renderNoteStats()}
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
