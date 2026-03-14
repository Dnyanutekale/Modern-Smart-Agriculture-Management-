import React from 'react';
import { User, Globe, Moon, Bell, Shield, LogOut } from 'lucide-react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-page animate-slide-up">
      <header className="page-header">
        <div>
          <h1 className="page-title">Settings & Profile</h1>
          <p className="text-muted">Manage your profile, language preferences, and account security.</p>
        </div>
      </header>

      <div className="grid-2">
        <div className="card">
            <h3>Farmer Profile</h3>
            <div className="profile-edit mt-4">
                <div className="profile-avatar-large">RP</div>
                <div className="form-group-grid mt-4">
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" defaultValue="Ramesh Patil" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <input type="text" defaultValue="Pune, Maharashtra" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label>Farm Size (Acres)</label>
                        <input type="number" defaultValue="5.5" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label>Soil Type</label>
                        <select className="form-input">
                            <option>Black Soil</option>
                            <option>Red Soil</option>
                            <option>Alluvial Soil</option>
                        </select>
                    </div>
                </div>
                <button className="btn btn-primary mt-4">Save Changes</button>
            </div>
        </div>

        <div className="card">
            <h3>App Preferences</h3>
            <div className="pref-list mt-3">
                <div className="pref-item">
                    <div className="pref-info">
                        <Globe size={20} />
                        <div>
                            <p className="font-bold">Language</p>
                            <p className="text-xs text-muted">Choose your preferred language</p>
                        </div>
                    </div>
                    <select className="pref-select">
                        <option>English</option>
                        <option>Marathi (मराठी)</option>
                        <option>Hindi (हिन्दी)</option>
                    </select>
                </div>

                <div className="pref-item">
                    <div className="pref-info">
                        <Moon size={20} />
                        <div>
                            <p className="font-bold">Dark Mode</p>
                            <p className="text-xs text-muted">Adjust app appearance</p>
                        </div>
                    </div>
                    <div className="toggle-switch active"></div>
                </div>

                <div className="pref-item">
                    <div className="pref-info">
                        <Bell size={20} />
                        <div>
                            <p className="font-bold">Notifications</p>
                            <p className="text-xs text-muted">Manage alerts and reminders</p>
                        </div>
                    </div>
                    <div className="toggle-switch active"></div>
                </div>
            </div>

            <div className="danger-zone mt-5">
                <button className="btn btn-outline-danger w-full flex-center gap-2">
                    <LogOut size={18} />
                    Logout Account
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
