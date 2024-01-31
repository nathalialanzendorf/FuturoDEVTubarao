import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Login from './pages/Login.tsx'
import Dashboard from './pages/Dashboard.tsx'
import SignUp from './pages/SignUp.tsx'
import Notfound from './pages/NotFound.tsx'
import GetUser from './pages/User/GetLogin.tsx'

const router = createBrowserRouter([
  
  {path: "/*", element: <Notfound />},
  {path: "/auth/login", element: <Login />},
  {path: "/dashboard", element: <Dashboard />},
  {path: "/auth/register", element: <SignUp />},
  {path: "/auth/:username", element: <GetUser />},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
