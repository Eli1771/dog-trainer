import uuid from 'uuid';

const dogsReducer = (state = {
  dogs: []
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

    default:
      return state;
  }
}

export default dogsReducer;
