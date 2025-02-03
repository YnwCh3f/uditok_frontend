import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Uditok from './Uditok';
import Szerkeszt from './Szerkeszt';
import Nevjegy from './Nevjegy';
import Notfound from './Notfound';

function App() {
  const router = createBrowserRouter([
    { element: <Layout />, children: [
      { path: "/uditok", element: <Uditok /> },
      { path: "/szerkeszt", element: <Szerkeszt /> },
      { path: "/nevjegy", element: <Nevjegy /> },
      { path: "*", element: <Notfound /> }
    ]}
  ]);

  return (
    <div className='container'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
