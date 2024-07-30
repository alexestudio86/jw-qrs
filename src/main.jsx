import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './router/App'
import { LoginProvider } from './context/LoginProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
  </React.StrictMode>
)
