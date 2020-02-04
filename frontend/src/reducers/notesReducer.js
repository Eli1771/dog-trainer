const notesReducer = (state = {
  notes: []
}, action) => {
  switch (action.type) {

    case 'ADD_NOTE':
      return {
        ...state,
        notes: [ ...state.notes, action.note ]
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
