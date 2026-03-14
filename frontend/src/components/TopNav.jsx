import React from 'react';
import { Search, Bell, Mic } from 'lucide-react';
import './TopNav.css';

const TopNav = () => {
  return (
    <header className="topnav">
      <div className="search-container">
        <Search className="search-icon" size={20} />
        <input 
          type="text" 
          placeholder="Ask AI or Search (Crop, Weather, Market)..." 
          className="search-input"
        />
        <button className="voice-search-btn">
          <Mic size={20} />
        </button>
      </div>

      <div className="topnav-actions">
        {/* Weather Quick Stats */}
        <div className="quick-weather hidden-mobile">
          <div className="temp">32°C</div>
          <div className="location">Pune, MH</div>
        </div>

        <button className="icon-btn notification-btn">
          <Bell size={22} />
          <span className="badge-dot"></span>
        </button>
      </div>
    </header>
  );
};

export default TopNav;
