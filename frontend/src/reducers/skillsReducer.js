import uuid from 'uuid';

const skillsReducer = (state = {
  skills: []
}, action) => {
  switch (action.type) {
    case 'ADD_SKILLS':
      console.log(action.skills);
      return { ...state, skills: action.skills, loading: false }

    default:
      return state;
  }
}

export default skillsReducer;
