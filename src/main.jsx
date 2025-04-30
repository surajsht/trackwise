import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index-final.css'
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
