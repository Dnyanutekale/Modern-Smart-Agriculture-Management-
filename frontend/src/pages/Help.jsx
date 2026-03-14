import React from 'react';
import { HelpCircle, Phone, MessageSquare, BookOpen, AlertCircle } from 'lucide-react';
import './Help.css';

const Help = () => {
  return (
    <div className="help-page animate-slide-up">
      <header className="page-header">
        <div>
          <h1 className="page-title">Help & Support</h1>
          <p className="text-muted">Contact agriculture experts and find answers to common farming questions.</p>
        </div>
      </header>

      <div className="grid-2">
        <div className="card">
            <h3>Contact Expert</h3>
            <div className="expert-list mt-3">
                <div className="expert-card">
                    <div className="expert-info">
                        <div className="expert-avatar">DS</div>
                        <div>
                            <p className="font-bold">Dr. Sanjay Deshmukh</p>
                            <p className="text-xs text-muted">Agronomist • 15 years exp.</p>
                        </div>
                    </div>
                    <div className="expert-actions mt-3">
                        <button className="btn btn-outline btn-sm"><Phone size={14} /> Call Expert</button>
                        <button className="btn btn-primary btn-sm"><MessageSquare size={14} /> Chat</button>
                    </div>
                </div>

                <div className="expert-card mt-3">
                    <div className="expert-info">
                        <div className="expert-avatar">AP</div>
                        <div>
                            <p className="font-bold">Anjali Patil</p>
                            <p className="text-xs text-muted">Pest Specialist • 8 years exp.</p>
                        </div>
                    </div>
                    <div className="expert-actions mt-3">
                        <button className="btn btn-outline btn-sm"><Phone size={14} /> Call Expert</button>
                        <button className="btn btn-primary btn-sm"><MessageSquare size={14} /> Chat</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="card">
            <h3>Emergency Helpline</h3>
            <div className="emergency-list mt-3">
                <div className="emergency-item">
                    <AlertCircle size={24} className="text-danger" />
                    <div>
                        <p className="font-bold">Kisan Call Center</p>
                        <h4 className="text-xl">1800-180-1551</h4>
                    </div>
                </div>
                <div className="emergency-item mt-3">
                    <AlertCircle size={24} className="text-danger" />
                    <div>
                        <p className="font-bold">Soil Health Helpline</p>
                        <h4 className="text-xl">011-23381092</h4>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="card mt-4">
        <h3>Knowledge Base & Guides</h3>
        <div className="guide-grid mt-3">
            <div className="guide-item">
                <BookOpen size={24} className="text-primary" />
                <p className="font-bold mt-2">Organic Farming 101</p>
                <p className="text-xs text-muted">Learn about natural pesticides and fertilizers.</p>
            </div>
            <div className="guide-item">
                <BookOpen size={24} className="text-primary" />
                <p className="font-bold mt-2">Crop Rotation Guide</p>
                <p className="text-xs text-muted">Best practices for maintaining soil fertility.</p>
            </div>
            <div className="guide-item">
                <BookOpen size={24} className="text-primary" />
                <p className="font-bold mt-2">Subsidy Information</p>
                <p className="text-xs text-muted">Recent government schemes for farmers.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
