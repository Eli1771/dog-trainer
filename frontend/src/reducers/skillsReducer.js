import uuid from 'uuid';

const skillsReducer = (state = {
  skills: []
}, action) => {
  switch (action.type) {

    case 'ADD_SKILL':
      const skill = {
        ...action.skill,
        id: uuid()
      }
      return {
        ...state,
        skills: [ ...state.skills, skill ]
      }

    case 'REMOVE_SKILL':
      return {
        ...state,
        skills: state.skills.filter(skill => skill.id !== action.skillId)
      }

    case 'ADD_SKILLS':
      console.log(action.skills);
      return { ...state, skills: action.skills, loading: false }

    default:
      return state;
  }
}

export default skillsReducer;
