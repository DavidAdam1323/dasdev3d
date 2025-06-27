import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster position="top-center" reverseOrder={false} />
  </React.StrictMode>,
)
