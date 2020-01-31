import uuid from 'uuid';

const notesReducer = (state = {
  notes: []
}, action) => {
  let note;

  switch (action.type) {

    case 'ADD_NOTE':
      note = {
        ...action.note,
        id: uuid()
      }
      return {
        ...state,
        notes: [ ...state.notes, note ]
      }

    case 'REMOVE_NOTE':
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.skillId)
      }

    case 'ADD_NOTES':
      return { ...state, notes: action.notes, loading: false }

    default:
      return state;
  }
}

export default notesReducer;
