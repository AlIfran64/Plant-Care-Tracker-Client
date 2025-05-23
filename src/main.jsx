import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router";
import { router } from './Router/Routes.jsx';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './Context/AuthProvider/AuthProvider.jsx';
import { ThemeProvider } from './Context/ThemeProvider/ThemeProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ThemeProvider>

      <ToastContainer className="p-6 text-lg" />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>

    </ThemeProvider>

  </StrictMode>,
)
