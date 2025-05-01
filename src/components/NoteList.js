import React, { useContext } from "react";
import NoteItem from "./NoteItem";
import { NotesContext } from "./NotesContextProvider";

function NoteList({displayNotes, searchterm}) {
  const notes = useContext(NotesContext);

  if (!notes) {
    return <p>Loading...</p>;
  }
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(searchterm.toLowerCase());
  });
  if (filteredNotes.length === 0) {
    return <p>No notes found</p>;
  }
  const notesToDisplay = searchterm ? filteredNotes : notes;
  if (notesToDisplay.length === 0) {
    return <p>No notes found</p>;
  }
  return (
    <ul>
      {/* Render list of notes here... */}
      {notesToDisplay.map((note) => (
          <NoteItem key={note.id} note={note} displayNotes={displayNotes} />
      ))}
    </ul>
  );
}

export default NoteList;
