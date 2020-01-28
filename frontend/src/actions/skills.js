export const addSkill = (skill, dog) => {
  return dispatch => {
    dispatch({
      type: 'ADD_SKILL',
      skill: skill,
      dog: dog
    });
    fetch('/skills', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(skill)
    }).then(resp => resp.json())
      .then(json => console.log('added skill to db!', json));
  }
}

export const removeSkill = skillId => {
  return dispatch => {
    dispatch({
      type: 'REMOVE_SKILL',
      skillId: skillId
    });
    fetch(`/skills/${skillId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(skillId)
    }).then(resp => resp.json())
      .then(json => console.log('deleted skill from db!', json));
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
