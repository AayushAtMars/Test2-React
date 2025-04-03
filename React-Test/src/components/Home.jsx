import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const { notes, loading, darkMode, deleteNote } = useContext(NotesContext);

  const handleDelete = (id) => {
    deleteNote(id);
    toast.success("Note deleted successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: darkMode ? "dark" : "light",
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className={`heroSection ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16">
          <div className="max-w-lg text-center md:text-left">
            <h1 className="text-4xl font-bold">Take Notes, Stay Organized</h1>
            <p className="mt-4 text-lg">
              Capture your ideas effortlessly with our intuitive Notes App. Stay
              productive and never lose a thought again.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>

          <div className="mt-10 md:mt-0">
            <img
              src="https://images.pexels.com/photos/1410226/pexels-photo-1410226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Notes App"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Notes Section */}
      <div className={`notes p-6 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
        <div className="text-center mb-6">
          <h2 className="text-5xl font-bold">My Notes</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note) => (
            <div key={note.id} className="border-slate-500 bg-yellow-100 text-black p-4 rounded-lg shadow flex flex-col justify-between">
              <h3 className="font-bold text-2xl">{note.title}</h3>
              <p>{note.body}</p>
              <div className="flex justify-between items-center">
                <Link to={`/note/${note.id}`} className="text-blue-500 text-lg font-medium border-2 rounded-xl px-4 py-2 hover:bg-blue-500 hover:text-white">
                  View
                </Link>
                <button
                  onClick={() => handleDelete(note.id)}
                  className="text-red-500 text-lg font-medium border-2 rounded-xl px-4 py-2 hover:bg-red-500 hover:text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
