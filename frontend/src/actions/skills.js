export const addSkill = (skill, dogName) => {
  return {
    type: 'ADD_SKILL',
    skill: skill,
    dogName: dogName
  }
}

export const removeSkill = skillId => {
  return {
    type: 'REMOVE_SKILL',
    skillId: skillId
  }
}

export const editSkill = (skill, rewardRate, dogName, rateString) => {
  return {
    type: 'EDIT_SKILL',
    skill: skill,
    rewardRate: rewardRate,
    dogName: dogName,
    rateString: rateString
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
