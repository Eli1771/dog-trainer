export const addNote = note => {
  return {
    type: 'ADD_NOTE',
    note: note
  }
}

export const autoAddNote = (dogName, skillName) => {
  return {
    type: 'AUTO_ADD_NOTE',
    dogName: dogName,
    skillName: skillName
  }
}
