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
      .then(json => console.log('added dog to db!', json));
  }
}

export const removeDog = dogId => {
  return dispatch => {
    dispatch({
      type: 'REMOVE_DOG',
      dogId: dogId
    });
  fetch(`/dogs/${dogId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(dogId)
  }).then(resp => resp.json())
    .then(json => console.log('deleted dog from db!', json));
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
