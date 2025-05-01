import React, { useContext } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { NotesContext } from "./NotesContextProvider";

function NoteContainer() {
  
  return (
    <>
      <Search />
      <div className="container">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default NoteContainer;
