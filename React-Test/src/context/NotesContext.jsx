import { createContext, useState, useEffect } from "react";
import axios from "axios";


export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=8")
      .then((res) => {
        setNotes(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const addNote = (title, body) => {
    const newNote = { id: Date.now(), title, body };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, loading, darkMode, setDarkMode }}>
      {children}
    </NotesContext.Provider>
  );
};
