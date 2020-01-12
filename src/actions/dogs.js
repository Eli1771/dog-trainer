export const addDog = dog => {
  return {
    type: 'ADD_DOG',
    action: dog
  }
}

export const deleteDog = dogId => {
  type: 'DELETE_DOG',
  action: dogId
}
