import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import Dashboard from './pages/Dashboard';
import Crops from './pages/Crops';
import Irrigation from './pages/Irrigation';
import Fertilizers from './pages/Fertilizers';
import Pests from './pages/Pests';
import Analytics from './pages/Analytics';
import Weather from './pages/Weather';
import Market from './pages/Market';
import Calendar from './pages/Calendar';
import Settings from './pages/Settings';
import Help from './pages/Help';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        
        <div className={`main-content-wrapper`}>
          <TopNav onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
          
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/crops" element={<Crops />} />
              <Route path="/irrigation" element={<Irrigation />} />
              <Route path="/fertilizers" element={<Fertilizers />} />
              <Route path="/pests" element={<Pests />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/market" element={<Market />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/help" element={<Help />} />
              {/* Other routes will be added here */}
              <Route path="*" element={<div className="container mt-3"><h2>Module in Development</h2></div>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
