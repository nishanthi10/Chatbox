import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
       <MantineProvider withGlobalStyles withNormalizeCSS>
    <App />
  </MantineProvider>
    </BrowserRouter>

)
