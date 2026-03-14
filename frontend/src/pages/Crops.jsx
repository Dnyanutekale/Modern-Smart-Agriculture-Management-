import React, { useState } from 'react';
import { Sprout, Info, Calendar, Droplets, Thermometer } from 'lucide-react';
import './Crops.css';

const Crops = () => {
  const [activeTab, setActiveTab] = useState('active');

  const cropData = [
    { id: 1, name: 'Maize (Corn)', area: '2.5 Acres', stage: 'Vegetative', growth: 65, health: 'Good', season: 'Kharif' },
    { id: 2, name: 'Wheat', area: '1.2 Acres', stage: 'Sowing', growth: 10, health: 'Excellent', season: 'Rabi' },
    { id: 3, name: 'Sugarcane', area: '3.0 Acres', stage: 'Mature', growth: 90, health: 'Fair', season: 'Annual' },
  ];

  return (
    <div className="crops-page animate-slide-up">
      <header className="page-header">
        <div>
          <h1 className="page-title">Crop Management</h1>
          <p className="text-muted">Monitor and manage your field crops and their growth cycles.</p>
        </div>
        <div className="tab-switcher">
          <button 
            className={`tab-btn ${activeTab === 'active' ? 'active' : ''}`}
            onClick={() => setActiveTab('active')}
          >
            Active Crops
          </button>
          <button 
            className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
            onClick={() => setActiveTab('history')}
          >
            History
          </button>
        </div>
      </header>

      <div className="crops-grid grid-3">
        {cropData.map((crop) => (
          <div key={crop.id} className="card crop-card">
            <div className="crop-card-header">
              <div className="crop-icon">
                <Sprout size={24} />
              </div>
              <div className="crop-meta">
                <h3>{crop.name}</h3>
                <span className="badge badge-primary">{crop.season}</span>
              </div>
            </div>
            
            <div className="crop-details">
              <div className="detail-item">
                <Info size={16} />
                <span>{crop.area}</span>
              </div>
              <div className="detail-item">
                <Calendar size={16} />
                <span>Stage: {crop.stage}</span>
              </div>
            </div>

            <div className="growth-tracker">
              <div className="tracker-header">
                <span>Growth Progress</span>
                <span>{crop.growth}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${crop.growth}%` }}></div>
              </div>
            </div>

            <div className="crop-actions">
              <button className="btn btn-outline btn-sm">Details</button>
              <button className="btn btn-primary btn-sm">Action Needs</button>
            </div>
          </div>
        ))}

        <div className="card add-crop-card">
            <div className="add-content">
                <div className="plus-icon">+</div>
                <h3>Add New Crop</h3>
                <p>Plan your next sowing season</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Crops;
