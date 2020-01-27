import uuid from 'uuid';
import moment from 'moment';

const notesReducer = (state = {
  notes: []
}, action) => {
  let note;
  let content;
  let timestamp;
  const formatTimestamp = 'ddd, MMM Do - h:mm a';

  switch (action.type) {

    case 'ADD_NOTE':
      note = {
        ...action.note,
        timestamp: moment().format(formatTimestamp),
        id: uuid()
      }
      return {
        ...state,
        notes: [ ...state.notes, note ]
      }

    case 'AUTO_ADD_NOTE':
      content = `Worked on ${action.skillName} with ${action.dog.name}.`;
      timestamp = moment().format(formatTimestamp);
      note = {
        content: content,
        timestamp: timestamp,
        dog_id: action.dog.id,
        id: uuid()
      }
      return { ...state, notes: [ ...state.notes, note ] }

    case 'REMOVE_NOTE':
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.skillId)
      }

    case 'ADD_NOTES':
      return { ...state, notes: action.notes, loading: false }

    case 'ADD_SKILL':
      content = `${action.dog.name} started learning ${action.skill.name}.`;
      timestamp = moment().format(formatTimestamp);
      note = {
        content: content,
        timestamp: timestamp,
        dog_id: action.dog.id,
        id: uuid()
      }
      return { ...state, notes: [ ...state.notes, note ] }

    case 'EDIT_SKILL':
      content = `${action.dog.name} now receives reinforcement for ${action.skill.name} ${action.rateString} when successful.`;
      timestamp = moment().format(formatTimestamp);
      note = {
        content: content,
        timestamp: timestamp,
        dog_id: action.dog.id,
        id: uuid()
      }
      return { ...state, notes: [ ...state.notes, note ] }

    default:
      return state;
  }
}

export default notesReducer;
