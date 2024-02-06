import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
