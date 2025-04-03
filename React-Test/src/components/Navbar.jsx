import { Link } from "react-router-dom";
import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import { FiHome, FiPlusCircle, FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(NotesContext);

  return (
    <nav
      className={`px-8 md:px-16 py-5 flex justify-between items-center shadow-md ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-3xl font-bold">Aayush Notes</h1>

      <div className="flex gap-6 items-center text-lg">
        <Link to="/" className="flex items-center gap-2 hover:text-blue-500 transition">
          <FiHome className="text-xl" /> Home
        </Link>
        <Link to="/create" className="flex items-center gap-2 hover:text-green-500 transition">
          <FiPlusCircle className="text-xl" /> Create Note
        </Link>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 flex items-center gap-2 px-4 py-2 rounded-lg shadow bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-gray-600" />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
