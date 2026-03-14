import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Sprout, 
  Droplets, 
  Beaker, 
  Bug, 
  BarChart3, 
  Calendar,
  Settings,
  HelpCircle,
  CloudRain,
  TrendingUp
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
    { name: 'Crop Management', icon: <Sprout size={20} />, path: '/crops' },
    { name: 'Irrigation', icon: <Droplets size={20} />, path: '/irrigation' },
    { name: 'Fertilizers', icon: <Beaker size={20} />, path: '/fertilizers' },
    { name: 'Pest Control', icon: <Bug size={20} />, path: '/pests' },
    { name: 'Analytics', icon: <BarChart3 size={20} />, path: '/analytics' },
    { name: 'Farm Calendar', icon: <Calendar size={20} />, path: '/calendar' },
    { name: 'Weather', icon: <CloudRain size={20} />, path: '/weather' },
    { name: 'Market Prices', icon: <TrendingUp size={20} />, path: '/market' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-icon">
          <Sprout size={28} color="var(--color-primary)" />
        </div>
        <h2 className="brand-name">AgroSmart <span className="text-primary">Pro</span></h2>
      </div>

      <div className="sidebar-nav">
        <p className="nav-label">MAIN MENU</p>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.name} className="nav-item">
              <NavLink 
                to={item.path} 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-footer">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/settings" className="nav-link">
              <span className="nav-icon"><Settings size={20} /></span>
              <span className="nav-text">Settings</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/help" className="nav-link">
              <span className="nav-icon"><HelpCircle size={20} /></span>
              <span className="nav-text">Help & Support</span>
            </NavLink>
          </li>
        </ul>
        
        <div className="user-prof mini-prof">
            <div className="avatar">F</div>
            <div className="info">
                <p className="name">Ramesh Patil</p>
                <p className="role">Premium Farmer</p>
            </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
