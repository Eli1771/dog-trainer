import React from 'react';

const Note = props => {
  const time = props.note.timestamp.split(' - ')[1];
  console.log('timestring', time)
  return(
    <div className="note">
      <p><span className="light">{time} - </span>{props.note.content}</p>
    </div>
  )
}

export default Note;
