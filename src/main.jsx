import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { PrimaryProvider } from './contexts/primaryContext.jsx'
import { GIFsProvider } from './contexts/GIFsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimaryProvider>
      <GIFsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GIFsProvider>
    </PrimaryProvider>
  </React.StrictMode>
)
