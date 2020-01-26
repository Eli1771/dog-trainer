import uuid from 'uuid';

const notesReducer = (state = {
  notes: []
}, action) => {
  switch (action.type) {

    case 'ADD_NOTE':
      const note = {
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
      console.log(action.notes);
      return { ...state, notes: action.notes, loading: false }

    default:
      return state;
  }
}

export default notesReducer;
