import React from 'react';

const Note = props => {
  return(
    <div className="note">
      <p>{props.timestamp}</p>
      <p>{props.content}</p>
    </div>
  )
}

export default Note;
