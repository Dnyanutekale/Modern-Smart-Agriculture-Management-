import React, { useState } from 'react';
import { Bug, Camera, ShieldAlert, CheckCircle } from 'lucide-react';
import './Pests.css';

const Pests = () => {
  const [isScanning, setIsScanning] = useState(false);

  const commonPests = [
    { id: 1, name: 'Aphids', damage: 'Leaf Curling', solution: 'Organic Neem Spray', risk: 'Medium' },
    { id: 2, name: 'Locusts', damage: 'Crop Defoliation', solution: 'Chlorpyrifos Spray', risk: 'High' },
  ];

  return (
    <div className="pests-page animate-slide-up">
      <header className="page-header">
        <div>
          <h1 className="page-title">Pest Control</h1>
          <p className="text-muted">Early detection and management of crop diseases and pests.</p>
        </div>
      </header>

      <div className="grid-2">
        <div className="card ai-detection-card">
          <div className="card-header-icon">
             <Camera size={32} className="text-primary" />
             <h3>AI Disease Detection</h3>
          </div>
          <p className="mt-2 text-sm text-muted">Upload or take a photo of the affected plant part to identify the disease using our AI model.</p>
          
          <div className="upload-area mt-4">
            {isScanning ? (
                <div className="scanning-ui">
                    <div className="scan-line"></div>
                    <p>Analyzing plant health...</p>
                </div>
            ) : (
                <button className="btn btn-primary" onClick={() => {
                    setIsScanning(true);
                    setTimeout(() => setIsScanning(false), 3000);
                }}>
                    <Camera size={20} />
                    Scan Plant
                </button>
            )}
          </div>
        </div>

        <div className="card">
            <h3>Recent Threats</h3>
            <div className="pest-list mt-3">
                {commonPests.map(pest => (
                    <div key={pest.id} className="pest-item">
                        <div className={`risk-indicator ${pest.risk.toLowerCase()}`}></div>
                        <div className="pest-info">
                            <div className="pest-header">
                                <strong>{pest.name}</strong>
                                <span className={`risk-badge ${pest.risk.toLowerCase()}`}>{pest.risk} Risk</span>
                            </div>
                            <p className="text-xs text-muted">Damage: {pest.damage}</p>
                            <div className="solution-note mt-2">
                                <ShieldAlert size={14} />
                                <span>{pest.solution}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      <div className="card mt-4">
        <h3>Spray Schedule Planner</h3>
        <div className="spray-grid mt-3">
            <div className="spray-card">
                <div className="spray-icon">
                    <CheckCircle size={20} />
                </div>
                <div className="spray-content">
                    <p className="font-bold">Organic Neem Base</p>
                    <p className="text-xs text-muted">Next Scheduled: 20th March</p>
                </div>
            </div>
            <div className="spray-card warning">
                <div className="spray-icon">
                    <CheckCircle size={20} />
                </div>
                <div className="spray-content">
                    <p className="font-bold">Fungal Protection</p>
                    <p className="text-xs text-muted">Overdue: 2 days ago</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Pests;
