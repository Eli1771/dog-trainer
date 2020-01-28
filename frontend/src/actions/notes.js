export const addNote = note => {
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

export const autoAddNote = (dog, skillName) => {
  return {
    type: 'AUTO_ADD_NOTE',
    dog: dog,
    skillName: skillName
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
