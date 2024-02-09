import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import ErrorPage from './pages/ErrorPage.jsx';
import CodingTopicPage from './pages/CodingTopic.jsx';
import CookingTopicPage from './pages/CookingTopic.jsx';
import FootballTopicPage from './pages/FootballTopic.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/topic/coding' element={<CodingTopicPage />} />
        <Route path='/topic/cooking' element={<CookingTopicPage />} />
        <Route path='/topic/football' element={<FootballTopicPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
