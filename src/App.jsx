import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Landingpage from './pages/Landingpage';
import Navbar from './pages/Navbar';
import Repopage from './pages/Repopage'; 
import Dashboard from './components/Dashboard'; 
import ProfilePage from './components/ProfilePage'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/repo" element={<Repopage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
