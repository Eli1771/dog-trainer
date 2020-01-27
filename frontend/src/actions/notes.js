export const addNote = content => {
  return {
    type: 'ADD_NOTE',
    content: content
  }
}

export const autoAddNote = (dogName, skillName) => {
  console.log('action firing!');
}
