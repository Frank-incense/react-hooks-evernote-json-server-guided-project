import React from "react";

function NoteItem({note, displayNotes}) {

  return (
    <li  onClick={()=> displayNotes(note)}>
      <h2>{note.title}</h2>
      <p className="truncated">{note.body}</p>
    </li>
  );
}

export default NoteItem;
