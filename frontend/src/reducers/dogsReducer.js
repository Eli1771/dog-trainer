import uuid from 'uuid';

const dogsReducer = (state = {
  dogs: [],
  loading: true,
  dogFormShowing: false
}, action) => {

  switch (action.type) {
    case 'ADD_DOG':
      const dog = {
        ...action.dog,
        id: uuid()
      }
      return {
        ...state,
        dogs: [ ...state.dogs, dog ],
        dogFormShowing: false
      }

    case 'REMOVE_DOG':
      return {
        ...state,
        dogs: state.dogs.filter(dog => dog.id !== action.dogId)
      }

    case 'LOADING':
      console.log('initial load action recieved by reducer!');
      return { ...state, loading: true }

    case 'SHOW_DOG_FORM':
      return { ...state, dogFormShowing: true }

    case 'HIDE_DOG_FORM':
      return { ...state, dogFormShowing: false }

    case 'ADD_DOGS':
      console.log('add dogs action sent to reducer: ', action.dogs);
      return { ...state, dogs: action.dogs, loading: false }

    default:
      return state;
  }
}

export default dogsReducer;
