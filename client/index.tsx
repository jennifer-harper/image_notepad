import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="kahu-jennifer.au.auth0.com"
      // image notepad
      //clientId="wSXyLTeM8M5tPaa3aXOL5GHzZqA8E3je" 
      //fruits
      clientId="HZM1FKSsrKBdv0d58YsLG12sPXVoszAW" 
      redirectUri={window.location.origin}
      audience="https://image-pad/api"
      //audience="https://fruits/api"
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  )
})
