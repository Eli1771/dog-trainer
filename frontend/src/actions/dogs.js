export const addDog = dog => {
  return {
    type: 'ADD_DOG',
    dog: dog
  }
}

export const removeDog = dogId => {
  return {
    type: 'REMOVE_DOG',
    dogId: dogId
  }
}
