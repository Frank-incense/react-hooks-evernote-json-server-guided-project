import React, { useState } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [view, setView] = useState("instructions");
  const [note, setNote] = useState(null);

  function getNotes(note) {
    console.log("NoteContainer", note);
    if (note) {
      setView("viewer");
      setNote(note);
    } else {
      setView("editor");
    }
  }
  
  
  return (
    <>
      <Search />
      <div className="container">
        <Sidebar displayNotes={getNotes}/>
        <Content view={view} note={note}/>
      </div>
    </>
  );
}

export default NoteContainer;
