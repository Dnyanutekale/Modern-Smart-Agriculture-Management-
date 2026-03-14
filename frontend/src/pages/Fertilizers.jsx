import React from 'react';
import { Beaker, Calculator, ClipboardList, Info } from 'lucide-react';
import './Fertilizers.css';

const Fertilizers = () => {
  const recommendations = [
    { id: 1, crop: 'Maize', fertilizer: 'NPK 12:32:16', amount: '50kg/acre', timing: 'Basal Dose' },
    { id: 2, crop: 'Wheat', fertilizer: 'Urea', amount: '40kg/acre', timing: 'Top Dressing' },
  ];

  return (
    <div className="fertilizers-page animate-slide-up">
      <header className="page-header">
        <div>
          <h1 className="page-title">Fertilizer Manager</h1>
          <p className="text-muted">Plan and track fertilizer application for optimal soil health.</p>
        </div>
      </header>

      <div className="grid-2">
        <div className="card">
          <div className="card-title-flex">
            <h3>Crop Recommendations</h3>
            <span className="badge badge-success">Organic & Chemical</span>
          </div>
          <div className="recommendation-list mt-3">
            {recommendations.map(rec => (
              <div key={rec.id} className="rec-item">
                <div className="rec-icon">
                  <Beaker size={20} />
                </div>
                <div className="rec-content">
                  <div className="rec-header">
                    <h4>{rec.crop}</h4>
                    <span className="text-primary font-bold">{rec.fertilizer}</span>
                  </div>
                  <div className="rec-details">
                    <span><Calculator size={14} /> {rec.amount}</span>
                    <span><ClipboardList size={14} /> {rec.timing}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card calculator-card">
            <h3>Quantity Calculator</h3>
            <form className="mt-3">
                <div className="form-group">
                    <label>Select Crop</label>
                    <select className="form-input">
                        <option>Maize</option>
                        <option>Wheat</option>
                        <option>Rice</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Farm Area (Acres)</label>
                    <input type="number" placeholder="Enter area" className="form-input" />
                </div>
                <button type="button" className="btn btn-primary w-full mt-2">Calculate Dosage</button>
            </form>
            <div className="calc-result mt-4">
                <p className="text-sm text-muted">Result will appear here...</p>
            </div>
        </div>
      </div>

      <div className="card mt-4">
        <h3>Soil Nutrient Guide (NPK)</h3>
        <div className="npk-grid mt-3">
            <div className="npk-item">
                <div className="npk-circle n">N</div>
                <div className="npk-info">
                    <p className="font-bold">Nitrogen</p>
                    <p className="text-xs">Growth & Greenery</p>
                </div>
            </div>
            <div className="npk-item">
                <div className="npk-circle p">P</div>
                <div className="npk-info">
                    <p className="font-bold">Phosphorus</p>
                    <p className="text-xs">Root & Bloom</p>
                </div>
            </div>
            <div className="npk-item">
                <div className="npk-circle k">K</div>
                <div className="npk-info">
                    <p className="font-bold">Potassium</p>
                    <p className="text-xs">Disease Resistance</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Fertilizers;
