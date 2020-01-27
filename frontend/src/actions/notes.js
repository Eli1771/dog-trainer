export const addNote = content => {
  return {
    type: 'ADD_NOTE',
    content: content
  }
}

export const autoAddNote = (dogName, skillName) => {
  return {
    type: 'AUTO_ADD_NOTE',
    dogName: dogName,
    skillName: skillName
  }
}
