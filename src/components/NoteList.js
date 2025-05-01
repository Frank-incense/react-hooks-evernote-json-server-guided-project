import React, { useContext } from "react";
import NoteItem from "./NoteItem";
import { NotesContext } from "./NotesContextProvider";

function NoteList() {
  const notes = useContext(NotesContext);

  if (!notes) {
    return <p>Loading...</p>;
  }
  return (
    <ul>
      {/* Render list of notes here... */}
      {notes.map((note) => (
          <NoteItem note={note} />
      ))}
    </ul>
  );
}

export default NoteList;
