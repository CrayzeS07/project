import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { Client } from './config/queryClient.js'
import { BrowserRouter } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import './index.css'
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={Client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
)
