import React from 'react';

const Note = props => {

  console.log('props for this note: ', props);

  return(
    <li className="note">
      <p>{props.note.timestamp}</p>
      <p>{props.note.content}</p>
    </li>
  )
}

export default Note;
