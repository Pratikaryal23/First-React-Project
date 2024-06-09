import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { Auth0Provider } from '@auth0/auth0-react';
// import {AppProvider} from './Page/Login.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

{/* <Auth0Provider
    domain="dev-mu1dw6h38bljgurd.us.auth0.com"
    clientId="fZkaz8uLYAfiKR0XTThqpniZQ9VnZSKJ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  > */}
    {/* <AppProvider> */}
    <App />
    {/* </AppProvider>
    </Auth0Provider> */}
  </React.StrictMode>,
)
