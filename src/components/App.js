import React from "react";
import Header from "./Header";
import NoteContainer from "./NoteContainer";
import NotesContextProvider from "./NotesContextProvider";

function App() {
  return (
    <div className="app">
      <NotesContextProvider>
        <Header />
        <NoteContainer />
      </NotesContextProvider>
    </div>
  );
}

export default App;
