import React from "react";
import NoteList from "./NoteList";

function Sidebar({displayNotes}) {
  
  
  return (
    <div className="master-detail-element sidebar">
      <NoteList displayNotes={displayNotes}/>
      <button>New</button>
    </div>
  );
}

export default Sidebar;
