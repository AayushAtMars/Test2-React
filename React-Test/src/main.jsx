import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import CreateNote from './components/CreateNote.jsx'
import NoteDetails from './components/NoteDetails.jsx'
import { createBrowserRouter,} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import { NotesProvider } from './context/NotesContext'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:"",
        element: <Home />
      },
      {
        path:"/create",
        element: <CreateNote />
      },
      {
        path:"/note/:id",
        element: <NoteDetails />
      },
      
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotesProvider>
      <RouterProvider router={router} />
    </NotesProvider>
  </StrictMode>,
)
