// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-2okexzzbp15pteqa.us.auth0.com"
    clientId="u82Q89CV6PoqwIeQlfQKgNT0Pyoxcckq"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
  <App />
</Provider>
    
  </Auth0Provider>,
  
)
