import moment from 'moment';
import uuid from 'uuid';

const formatTimestamp = 'ddd, MMM Do - h:mm a';

export const addNote = note => {
  let timestamp = moment().format(formatTimestamp);
  let timedNote = {
    ...note,
    timestamp: timestamp
  }

  console.log('note to fetch: ', timedNote)
  return dispatch => {
    fetch('/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(timedNote)
    }).then(resp => resp.json())
      .then(json => dispatch({type: 'ADD_NOTE', note: json}));
  }
}

export const autoAddNote = (dog, skillName) => {
  let content = `Worked on ${skillName} with ${dog.name}.`;
  let timestamp = moment().format(formatTimestamp);
  let note = {
    content: content,
    timestamp: timestamp,
    dog_id: dog.id,
  }
  return dispatch => {
    dispatch({
      type: 'ADD_NOTE',
      note: note
    });
    fetch('/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(note)
    }).then(resp => resp.json())
      .then(json => console.log('added note to db!', json));
  }
}

export const fetchNotes = () =>{
  return dispatch => {
    dispatch({ type: 'LOADING' });
    fetch('/notes')
      .then(resp => resp.json())
      .then(json => dispatch({ type: 'ADD_NOTES', notes: json }));
  }
}
