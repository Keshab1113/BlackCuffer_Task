import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'

function Layout() {

  return (
    <div className=' h-screen overflow-hidden'>
      <Header />
      <Outlet />
      <Sidebar/>
      
    </div>
  )
}

export default Layout
