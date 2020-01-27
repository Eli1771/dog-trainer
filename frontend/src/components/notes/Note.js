import React from 'react';

const Note = props => {

  return(
    <div className="note">
      <p>{props.note.timestamp}</p>
      <p>{props.note.content}</p>
    </div>
  )
}

export default Note;
