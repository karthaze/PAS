import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/pas-welcome-page'
import LandingPage from './pages/pas-landing-page';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/landing" element={<LandingPage />} />
        {/* Later: <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
