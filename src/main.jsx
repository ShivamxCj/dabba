import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Navbar.jsx'
import Hero from './Hero.jsx'
import Example from './example.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Example/>
    <Hero/>
    
  </StrictMode>,
)
