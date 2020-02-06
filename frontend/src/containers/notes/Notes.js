import React, { Component } from 'react';
import { connect } from 'react-redux';

import NoteForm from '../../components/notes/NoteForm';
import Note from '../../components/notes/Note';
import { addNote, fetchNotes } from '../../actions/notes';

class Notes extends Component {
  componentDidMount() {
    if (!this.props.notes.length) {
      this.props.fetchNotes()
    }
  }
  renderNotes = notes => {
    const filteredNotes = notes.filter(n => n.dog_id === this.props.dogId);

    let r = [];
    let firstDate;
    for (let i = 0; i < filteredNotes.length; i++) {
      let note = filteredNotes[i];
      let currentDate = note.timestamp.split(' - ')[0];
      console.log('current date: ', currentDate);
      if (currentDate !== firstDate) {
        //return div w/ datestring and add to results
        //update firstdate w/ newdate
        firstDate = currentDate;
        let dateDiv = (
          <div key={currentDate} className="light">
            <br/>
            <p className="little">{currentDate}</p><hr/>
          </div>
        )
        r.push(dateDiv)
      }
      r.push(<Note key={note.id} note={note} />)
    }

    return r;


    // return filteredNotes.map(note => {
    //   return <Note key={note.id} note={note} />
    // });
  }

  render() {
    return(
      <div className="notes-container">
        <h3>Progress Log</h3>
        <div className="notes">
          {this.renderNotes(this.props.notes)}
        </div>
        <NoteForm addNote={this.props.addNote} dogId={this.props.dogId} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes.notes
  }
}

export default connect(mapStateToProps, { addNote, fetchNotes })(Notes);
