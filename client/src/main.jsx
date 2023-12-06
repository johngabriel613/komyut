import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import MapProvider from './context/MapProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MapProvider>
      <App />
    </MapProvider>
  </React.StrictMode>,
)
