import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/lexend/wght.css'
import '@fontsource/kalam/latin-400.css'
import '@fontsource/kalam/latin-700.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
