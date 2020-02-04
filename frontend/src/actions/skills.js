import moment from 'moment';

const formatTimestamp = 'ddd, MMM Do - h:mm a';

export const addSkill = (skill, dog) => {

  let content = `${dog.name} started learning ${skill.name}.`;
  let timestamp = moment().format(formatTimestamp);
  let note = {
    content: content,
    timestamp: timestamp,
    dog_id: dog.id
  }

  return async dispatch => {
    const skillResp = await fetch('/skills', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(skill)
    });
    const skillJson = await skillResp.json();
    await dispatch({type: 'ADD_SKILL', skill: skillJson});

    const noteResp = await fetch('/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(note)
    });
    const noteJson = await noteResp.json();
    await dispatch({type: 'ADD_NOTE', note: noteJson});
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

  let content = `${dog.name} now receives reinforcement for ${skill.name} ${rateString} when successful.`;
  let timestamp = moment().format(formatTimestamp);
  let note = {
    content: content,
    timestamp: timestamp,
    dog_id: dog.id
  }

  return async dispatch => {

    dispatch({
      type: 'EDIT_SKILL',
      skill: skill,
      rewardRate: rewardRate
    });

    await fetch(`/skills/${skill.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({reward_rate: rewardRate})
    });

    const noteResp = await fetch('/notes/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(note)
    });
    const noteJson = await noteResp.json();
    await dispatch({type: 'ADD_NOTE', note: noteJson});
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
