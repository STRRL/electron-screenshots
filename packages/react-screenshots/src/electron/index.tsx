import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import '../style.css'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
