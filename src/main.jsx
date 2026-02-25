// src/main.jsx (ou main.tsx)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>  ← Comenta ou remove estas duas linhas
    <App />
  // </StrictMode>
)