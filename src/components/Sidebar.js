import React from "react";
import NoteList from "./NoteList";

function Sidebar({displayNotes, searchterm}) {
  
  
  return (
    <div className="master-detail-element sidebar">
      <NoteList displayNotes={displayNotes} searchterm={searchterm}/>
      <button>New</button>
    </div>
  );
}

export default Sidebar;
