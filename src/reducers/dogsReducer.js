const dogsReducer = (state = {
  dogs: []
}, action) => {
  switch (action.type) {
    case 'ADD_DOG':
      return {
        ...state,
        dogs: [ ...state.dogs, action.dog ]
      }

    case 'REMOVE_DOG':
      let idx = state.dogs.findIndex(dog => dog.id === action.dogId);
      return {
        ...state,
        dogs: [ ...state.dogs.slice(0, idx), ...state.dogs.slice(idx + 1) ]
      }

    default:
      return state;
  }
}

export default dogsReducer;
