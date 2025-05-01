const { createContext, useState, useEffect } = require("react");

export const NotesContext = createContext();

function NotesContextProvider({children}){
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/notes")
            .then((res) => res.json())
            .then((data) => setNotes(data))
    }, []);
    return(
        <NotesContext.Provider value={notes}>
            {children}
        </NotesContext.Provider>
    )
}

export default NotesContextProvider;