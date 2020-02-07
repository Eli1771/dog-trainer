import React from 'react';

const Note = props => {
  const time = props.note.timestamp.split(' - ')[1];
  console.log('timestring', time)
  return(
    <div className="note">
      <span className="light">{time}&emsp;-</span>
      <div className="note-content">{props.note.content}</div>
    </div>
  )
}

export default Note;
