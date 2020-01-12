const dogsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DOG':
      return [...state, action.dog];

    default:
      return state;
  }
}
