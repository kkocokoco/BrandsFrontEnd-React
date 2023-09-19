import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <Routes> {/* Wrap your routes in a <Routes> component */}
        <Route path="/" element={<HomePage />} /> {/* Use 'element' instead of 'component' */}
      </Routes>
    </Router>
  );
}

export default App;