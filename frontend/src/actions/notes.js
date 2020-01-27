export const addNote = note => {
  return {
    type: 'ADD_NOTE',
    note: note
  }
}

export const autoAddNote = (dog, skillName) => {
  return {
    type: 'AUTO_ADD_NOTE',
    dog: dog,
    skillName: skillName
  }
}
