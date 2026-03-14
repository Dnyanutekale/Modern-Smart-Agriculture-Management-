import React from 'react';
import { CloudRain, Droplets, Sprout, TrendingUp } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-page animate-slide-up">
      <header className="page-header">
        <div>
          <h1 className="page-title">Farm Overview</h1>
          <p className="text-muted">Welcome back, Ramesh. Here is your farm's status today.</p>
        </div>
        <button className="btn btn-primary">
          <Sprout size={18} />
          Add New Field
        </button>
      </header>

      {/* Quick Stats Grid */}
      <div className="grid-4 stats-grid">
        <div className="card stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--color-accent)' }}>
            <Droplets size={24} />
          </div>
          <div className="stat-info">
            <p className="stat-label">Soil Moisture</p>
            <h3 className="stat-value">68%</h3>
            <p className="stat-trend text-success">Optimal</p>
          </div>
        </div>

        <div className="card stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: 'var(--color-success)' }}>
            <Sprout size={24} />
          </div>
          <div className="stat-info">
            <p className="stat-label">Active Crops</p>
            <h3 className="stat-value">4 Fields</h3>
            <p className="stat-trend">Growing phase</p>
          </div>
        </div>

        <div className="card stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'rgba(234, 179, 8, 0.1)', color: 'var(--color-warning)' }}>
            <CloudRain size={24} />
          </div>
          <div className="stat-info">
            <p className="stat-label">Rain Forecast</p>
            <h3 className="stat-value">20% Chance</h3>
            <p className="stat-trend text-muted">Next 24 hours</p>
          </div>
        </div>

        <div className="card stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: 'var(--color-danger)' }}>
            <TrendingUp size={24} />
          </div>
          <div className="stat-info">
            <p className="stat-label">Market Trend</p>
            <h3 className="stat-value">₹2,200</h3>
            <p className="stat-trend text-success">+₹150 (Wheat)</p>
          </div>
        </div>
      </div>

      <div className="grid-2 dashboard-main-grid">
        <div className="card">
          <div className="card-header-flex">
            <h3>Weather Summary</h3>
            <TrendingUp size={18} className="text-primary" />
          </div>
          <div className="weather-widget mt-3">
            <div className="flex-between">
                <div>
                    <h4 className="text-2xl font-bold">32°C</h4>
                    <p className="text-sm text-muted">Clear Sky • Pune</p>
                </div>
                <div className="text-warning"><TrendingUp size={32} /></div>
            </div>
            <div className="mt-4 p-3 bg-light rounded">
                <p className="text-xs text-danger font-bold">Alert: Heat wave expected tomorrow</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Today's Activities</h3>
          <ul className="task-list mt-3">
            <li className="task-item">
              <input type="checkbox" defaultChecked />
              <span>Irrigate Field A (Wheat)</span>
              <span className="badge badge-success">Done</span>
            </li>
             <li className="task-item">
              <input type="checkbox" />
              <span>Apply NPK Fertilizer to Field B</span>
              <span className="badge badge-warning">Pending</span>
            </li>
            <li className="task-item">
              <input type="checkbox" />
              <span>Inspect Pest Attack in Field C</span>
              <span className="badge badge-danger">Urgent</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
