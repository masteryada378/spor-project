import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardsPage from './pages/CardsPage';
import CreateCardPage from './pages/CreateCardPage';
import './App.css';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<CardsPage />} />
      <Route path="/create" element={<CreateCardPage />} />
    </Routes>
  </Router>
);

export default App;
