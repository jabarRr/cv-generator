import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PageLayout from './pageLayout'
import './index.css'
import App from './App.jsx'
import DetailsLayout from './detailsLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <PageLayout/>
   

  </StrictMode>,
)
