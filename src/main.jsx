import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Proizvodi from './Components/Proizvodi.jsx'
import HomePage from './Components/HomePage.jsx'
import SingleProduct from './Components/SingleProduct.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <div>Error</div>,
  children: [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/proizvodi',
      element: <Proizvodi />,
    },
    {
      path: '/singleProizvodi',
      element: <SingleProduct />,
    },
    {
      path: '/proizvodi/:id',
      element: <SingleProduct />,
    }
  ]
}
]);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>

      <RouterProvider router={router} />

    </ClerkProvider>

  </React.StrictMode>
)
