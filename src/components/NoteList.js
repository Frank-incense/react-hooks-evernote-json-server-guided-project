import React, { useContext } from "react";
import NoteItem from "./NoteItem";
import { NotesContext } from "./NotesContextProvider";

function NoteList({displayNotes}) {
  const notes = useContext(NotesContext);

  if (!notes) {
    return <p>Loading...</p>;
  }
  return (
    <ul>
      {/* Render list of notes here... */}
      {notes.map((note) => (
          <NoteItem key={note.id} note={note} displayNotes={displayNotes} />
      ))}
    </ul>
  );
}

export default NoteList;
