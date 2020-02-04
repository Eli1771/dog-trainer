const skillsReducer = (state = {
  skills: []
}, action) => {
  switch (action.type) {

    case 'ADD_SKILL':
      return {
        ...state,
        skills: [ ...state.skills, action.skill ]
      }

    case 'REMOVE_SKILL':
      return {
        ...state,
        skills: state.skills.filter(skill => skill.id !== action.skillId)
      }

    case 'EDIT_SKILL':
      const idx = state.skills.findIndex(s => s.id === action.skill.id);
      return {
        ...state,
        skills: [
          ...state.skills.slice(0, idx),
          {
            ...state.skills[idx],
            reward_rate: action.rewardRate
          },
          ...state.skills.slice(idx + 1)
        ]
      }

    case 'ADD_SKILLS':
      return { ...state, skills: action.skills, loading: false }

    default:
      return state;
  }
}

export default skillsReducer;
