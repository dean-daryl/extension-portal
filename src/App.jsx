import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MarketingPage from './views/MarketingPage';
import Dashboard from './views/Dashboard';
import Analytics from './views/Analytics';

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<MarketingPage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Analytics />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;