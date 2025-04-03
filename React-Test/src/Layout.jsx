import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/NavBar'
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <>
    <ToastContainer />
    <Navbar />
    <Outlet />
    </>
  )
}

export default Layout
