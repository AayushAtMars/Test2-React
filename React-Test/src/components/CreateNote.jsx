import { useState, useContext } from 'react';
import { NotesContext } from '../context/NotesContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiEdit3, FiFileText, FiPlusCircle } from "react-icons/fi";

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { addNote, darkMode } = useContext(NotesContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim() || !body.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    addNote(title, body);
    toast.success('Note created successfully!');
    navigate('/');
  };

  return (
    <div
      className={`p-6 relative top-60 rounded-lg shadow-lg transition ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black w-[90%] md:w-[70%] lg:w-[50%] mx-auto"}`}
    >
      <h2 className="text-2xl font-bold mb-4 text-center flex items-center justify-center gap-2">
         Create a New Note
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div
          className={`flex items-center border p-3 rounded-md transition ${
            darkMode
              ? "bg-gray-800 border-gray-600 text-white focus-within:ring-blue-500"
              : "bg-gray-50 border-gray-300 text-black focus-within:ring-blue-400"
          } focus-within:ring-2`}
        >
          <FiEdit3 className="mr-2" />
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-transparent outline-none"
          />
        </div>

        <div
          className={`flex items-start border p-3 rounded-md transition ${
            darkMode
              ? "bg-gray-800 border-gray-600 text-white focus-within:ring-blue-500"
              : "bg-gray-50 border-gray-300 text-black focus-within:ring-blue-400"
          } focus-within:ring-2`}
        >
          <FiFileText className="mt-1 mr-2" />
          <textarea
            placeholder="Note content"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full bg-transparent outline-none h-32 resize-none"
          />
        </div>

        <button
          type="submit"
          className={`p-3 rounded-md font-medium transition shadow-md flex items-center justify-center gap-2 ${
            darkMode
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          <FiPlusCircle className="text-lg" /> Add Note
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
