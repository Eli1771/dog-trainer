import moment from 'moment';
import uuid from 'uuid';

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


    // .then(resp => resp.json())
    //   .then(json => dispatch({type: 'ADD_SKILL', skill: json}));

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

    // .then(resp => resp.json())
    //   .then(json => dispatch({type: 'ADD_NOTE', note: json}));
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

  return dispatch => {

    dispatch({
      type: 'EDIT_SKILL',
      skill: skill,
      rewardRate: rewardRate
    });

    dispatch({
      type: 'ADD_NOTE',
      note: note
    });

    fetch(`/skills/${skill.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({reward_rate: rewardRate})
    }).then(resp => resp.json())
      .then(json => console.log('edited skill in db!', json));

    fetch('/notes/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(note)
    }).then(resp => resp.json())
      .then(json => console.log('added note in db!', json));
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
