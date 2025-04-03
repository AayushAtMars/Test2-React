import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { NotesContext } from "../context/NotesContext";
import { FiArrowLeft, FiFileText, FiEdit3 } from "react-icons/fi";

const NoteDetails = () => {
  const { id } = useParams();
  const { notes, darkMode } = useContext(NotesContext);
  const note = notes.find((note) => note.id.toString() === id);

  if (!note)
    return <div className="text-center mt-10 text-xl text-red-500">Note not found</div>;

  return (
    <div
      className={`min-h-screen p-6 flex flex-col items-center justify-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <Link
        to="/"
        className="mb-6 flex items-center gap-2 text-lg font-medium text-blue-500 hover:underline"
      >
        <FiArrowLeft /> Back to Notes
      </Link>

      <div
        className={`w-full max-w-2xl p-6 rounded-lg shadow-lg ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="flex items-center gap-3 border-b pb-2 mb-4">
          <FiEdit3 className="text-blue-500 text-2xl" />
          <h2 className="text-3xl font-bold">{note.title}</h2>
        </div>

        <div className="flex items-start gap-3">
          <FiFileText className="text-gray-500 text-xl mt-1" />
          <p className="text-lg">{note.body}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteDetails;
