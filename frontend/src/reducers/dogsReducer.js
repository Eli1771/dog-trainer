const dogsReducer = (state = {
  dogs: [],
  loading: true,
  dogFormShowing: false
}, action) => {

  switch (action.type) {
    case 'ADD_DOG':
      return {
        ...state,
        dogs: [ ...state.dogs, action.dog ],
        dogFormShowing: false
      }

    case 'REMOVE_DOG':
      return {
        ...state,
        dogs: state.dogs.filter(dog => dog.id !== action.dogId)
      }

    case 'LOADING':
      return { ...state, loading: true }

    case 'SHOW_DOG_FORM':
      return { ...state, dogFormShowing: true }

    case 'HIDE_DOG_FORM':
      return { ...state, dogFormShowing: false }

    case 'ADD_DOGS':
      return { ...state, dogs: action.dogs, loading: false }

    default:
      return state;
  }
}

export default dogsReducer;
