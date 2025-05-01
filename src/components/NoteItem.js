import React from "react";

function NoteItem({note}) {
  console.log(note);
  return (
    <li key={note.id}>
      <h2>{note.title}</h2>
      <p className="truncated">{note.body}</p>
    </li>
  );
}

export default NoteItem;
