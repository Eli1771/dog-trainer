export const addDog = dog => {
  return {
    type: 'ADD_DOG',
    dog: dog
  }
}

export const removeDog = dogId => {
  return {
    type: 'REMOVE_DOG',
    dogId: dogId
  }
}

export function fetchDogs() {
  return dispatch => {
    dispatch({ type: 'LOADING' });
    fetch('/dogs')
      .then(resp => resp.json())
      .then(json => dispatch({ type: 'ADD_DOGS', dogs: json }));
  }
}

export function fetchSkills() {
  return dispatch => {
    dispatch({ type: 'LOADING'});
    fetch('/skills')
      .then(resp => resp.json())
      .then(json => console.log(json));
  }
}
