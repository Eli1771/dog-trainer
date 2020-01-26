export const addSkill = skill => {
  return {
    type: 'ADD_SKILL',
    skill: skill
  }
}

export const editSkill = (skill, rewardRate) => {
  return {
    type: 'EDIT_SKILL',
    skill: skill,
    reward_rate: rewardRate
  }
}

export const fetchSkills = () => {
  return dispatch => {
    dispatch({ type: 'LOADING'});
    fetch('/skills')
      .then(resp => resp.json())
      .then(json => dispatch({ type: 'ADD_SKILLS', skills: json }));
  }
}
