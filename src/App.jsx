import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MarketingPage from './views/MarketingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<MarketingPage />} />
      </Routes>
    </Router>
  );
}

export default App;