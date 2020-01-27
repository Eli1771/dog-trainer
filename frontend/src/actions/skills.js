export const addSkill = (skill, dog) => {
  return {
    type: 'ADD_SKILL',
    skill: skill,
    dog: dog
  }
}

export const removeSkill = skillId => {
  return {
    type: 'REMOVE_SKILL',
    skillId: skillId
  }
}

export const editSkill = (skill, rewardRate, dog, rateString) => {
  return {
    type: 'EDIT_SKILL',
    skill: skill,
    rewardRate: rewardRate,
    dog: dog,
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
