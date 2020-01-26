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
