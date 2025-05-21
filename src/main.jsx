import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router";
import { router } from './Router/Routes.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer className="p-6 text-lg" />
    <RouterProvider router={router} />
  </StrictMode>,
)
