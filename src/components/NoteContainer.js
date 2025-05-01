import React, { useState } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [view, setView] = useState("instructions");
  const [searchterm, setSearchTerm] = useState("");
  const [note, setNote] = useState(null);

  function getNotes(note) {
    console.log("NoteContainer", note);
    if (note) {
      setView("viewer");
      setNote(note);
    }
  }
  
  function handleSearch(searchWord) {
    console.log("searching");
    setSearchTerm(searchWord);
  }
  
  return (
    <>
      <Search onSearch={handleSearch}/>
      <div className="container">
        <Sidebar displayNotes={getNotes} searchterm={searchterm}/>
        <Content view={view} note={note}/>
      </div>
    </>
  );
}

export default NoteContainer;
