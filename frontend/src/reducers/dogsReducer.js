import uuid from 'uuid';

const dogsReducer = (state = {
  dogs: [],
  skills: [],
  loading: false
}, action) => {

  switch (action.type) {
    case 'ADD_DOG':
      const dog = {
        ...action.dog,
        id: uuid()
      }
      return {
        ...state,
        dogs: [ ...state.dogs, dog ]
      }

    case 'REMOVE_DOG':
      return {
        ...state,
        dogs: state.dogs.filter(dog => dog.id !== action.dogId)
      }

    case 'LOADING_DOGS':
      return { ...state, loading: true }

    case 'ADD_DOGS':
      console.log(action.dogs);
      return { ...state, dogs: action.dogs, loading: false }

    default:
      return state;
  }
}

export default dogsReducer;
