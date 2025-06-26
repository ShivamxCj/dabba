import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Hero.jsx'
import NewNavbar from './Navbar2.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewNavbar/>
    <Hero/>
    <Footer/>
    
  </StrictMode>,
)
