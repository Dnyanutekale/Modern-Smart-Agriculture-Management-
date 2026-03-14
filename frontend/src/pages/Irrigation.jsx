import React, { useState } from 'react';
import { Droplets, Clock, AlertTriangle, CheckCircle2 } from 'lucide-react';
import './Irrigation.css';

const Irrigation = () => {
  const [scheduleType, setScheduleType] = useState('drip');

  const upcomingTasks = [
    { id: 1, field: 'Field A (Maize)', time: '06:00 AM', status: 'Pending', type: 'Drip' },
    { id: 2, field: 'Field B (Wheat)', time: '04:30 PM', status: 'Scheduled', type: 'Sprinkler' },
  ];

  return (
    <div className="irrigation-page animate-slide-up">
      <header className="page-header">
        <div>
          <h1 className="page-title">Irrigation Scheduler</h1>
          <p className="text-muted">Smart water management and automated irrigation timing.</p>
        </div>
      </header>

      <div className="grid-2">
        <div className="card">
          <h3>Daily Schedule</h3>
          <div className="schedule-list mt-3">
            {upcomingTasks.map(task => (
              <div key={task.id} className="schedule-item">
                <div className="item-info">
                  <div className="time-badge">{task.time}</div>
                  <div>
                    <p className="font-bold">{task.field}</p>
                    <p className="text-xs text-muted">{task.type} System</p>
                  </div>
                </div>
                <div className={`status-badge ${task.status.toLowerCase()}`}>
                  {task.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card water-usage-card">
            <h3>Water Usage Tracking</h3>
            <div className="usage-meter">
                <div className="meter-header">
                    <span>Weekly Limit</span>
                    <span>4,200L / 5,000L</span>
                </div>
                <div className="meter-bar">
                    <div className="meter-fill" style={{ width: '84%' }}></div>
                </div>
            </div>
            <div className="stats-mini mt-4">
                <div className="stat">
                    <Droplets size={16} className="text-primary" />
                    <span>Avg. 600L/day</span>
                </div>
                <div className="stat">
                    <AlertTriangle size={16} className="text-warning" />
                    <span>Low Pressure detected in Line 3</span>
                </div>
            </div>
        </div>
      </div>

      <div className="card mt-4">
        <h3>System Configuration</h3>
        <div className="config-grid mt-3">
            <div className="config-option active">
                <Droplets size={24} />
                <p>Drip Irrigation</p>
            </div>
            <div className="config-option">
                <CheckCircle2 size={24} />
                <p>Sprinkler System</p>
            </div>
            <div className="config-option">
                <Clock size={24} />
                <p>Pump Automated</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Irrigation;
