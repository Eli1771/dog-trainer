export const addDog = dog => {
  return dispatch => {
    dispatch({
      type: 'ADD_DOG',
      dog: dog
    });
    fetch('/dogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(dog)
    }).then(resp => resp.json())
      .then(json => console.log('added dog i think?', json));
  }
}

export const removeDog = dogId => {
  return {
    type: 'REMOVE_DOG',
    dogId: dogId
  }
}

export const showDogForm = () => {
  return {
    type: 'SHOW_DOG_FORM'
  }
}

export const hideDogForm = () => {
  return {
    type: 'HIDE_DOG_FORM'
  }
}

export const fetchDogs = () =>{
  return dispatch => {
    dispatch({ type: 'LOADING' });
    fetch('/dogs')
      .then(resp => resp.json())
      .then(json => dispatch({ type: 'ADD_DOGS', dogs: json }));
  }
}
