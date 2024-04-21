// Import the necessary dependencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/shared/Login';
import Home from './pages/shared/Home';
import Dashboard from './pages/user/Dashboard';
import Appointment from './pages/user/Appointment';
import Games from './pages/user/Games';
import Profile from './pages/user/Profile';
import Hospitalinfo from './pages/user/Hospitalinfo';
import Medicalinfo from './pages/user/Medicalinfo';
import Department from './pages/shared/Department';
import Parentdashboard from './pages/parent/Parentdashboard';
import Map from './pages/shared/Map';
import Mathquiz from './pages/user/Mathquiz';
import Tictactoe from './pages/user/Tictactoe';
import Spellingquiz from './pages/user/Spellingquiz';
import './App.css';

// Define the main App component
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Define the routes for different pages */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/games" element={<Games />} />
          <Route path="/mathquiz" element={<Mathquiz />} />
          <Route path="/tictactoe" element={<Tictactoe />} />
          <Route path="/spellingquiz" element={<Spellingquiz />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/hospitalinfo" element={<Hospitalinfo />} />
          <Route path="/medicalinfo" element={<Medicalinfo />} />
          <Route path="/department" element={<Department />} />
          <Route path="/parentdashboard" element={<Parentdashboard />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
