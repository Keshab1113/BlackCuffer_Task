import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Layout.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Dashboard from './pages/Dashboard.jsx'
import NoPage from './pages/NoPage.jsx'
import Charts from './pages/Charts.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='charts' element={<Charts />} />
      </Route>
      <Route path='*' element={<NoPage />} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
