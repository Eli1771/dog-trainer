export const addDog = dog => {
  return {
    type: 'ADD_DOG',
    action: dog
  }
}

export const removeDog = dogId => {
  return {
    type: 'REMOVE_DOG',
    action: dogId
  }
}
