import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { BrowserRouter as Router  } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </Router>
)
