import React from 'react';
import { CloudRain, Sun, Cloud, Wind, Droplets, Thermometer, AlertCircle } from 'lucide-react';
import './Weather.css';

const Weather = () => {
  const forecast = [
    { day: 'Mon', temp: '32°', condition: 'Sunny', icon: <Sun size={24} className="text-warning" /> },
    { day: 'Tue', temp: '29°', condition: 'Cloudy', icon: <Cloud size={24} className="text-secondary" /> },
    { day: 'Wed', temp: '28°', condition: 'Rain', icon: <CloudRain size={24} className="text-primary" /> },
    { day: 'Thu', temp: '31°', condition: 'Sunny', icon: <Sun size={24} className="text-warning" /> },
    { day: 'Fri', temp: '30°', condition: 'Cloudy', icon: <Cloud size={24} className="text-secondary" /> },
  ];

  return (
    <div className="weather-page animate-slide-up">
      <header className="page-header">
        <div>
          <h1 className="page-title">Weather Integration</h1>
          <p className="text-muted">Real-time weather updates and agricultural forecasting.</p>
        </div>
      </header>

      <div className="grid-2">
        <div className="card current-weather-card">
            <div className="current-header">
                <div>
                    <h2>Pune, Maharashtra</h2>
                    <p className="text-sm">Saturday, 14 March 2026</p>
                </div>
                <div className="temp-large">32°C</div>
            </div>
            <div className="current-body mt-4">
                <div className="weather-main-icon">
                    <Sun size={64} className="text-warning" />
                    <p className="font-bold">Clear Sky</p>
                </div>
                <div className="weather-details-grid">
                    <div className="w-detail">
                        <Wind size={20} />
                        <div>
                            <p className="text-xs text-muted">Wind Speed</p>
                            <p className="font-bold">12 km/h</p>
                        </div>
                    </div>
                    <div className="w-detail">
                        <Droplets size={20} />
                        <div>
                            <p className="text-xs text-muted">Humidity</p>
                            <p className="font-bold">45%</p>
                        </div>
                    </div>
                    <div className="w-detail">
                        <Thermometer size={20} />
                        <div>
                            <p className="text-xs text-muted">Visibility</p>
                            <p className="font-bold">10 km</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="card alert-card">
            <div className="alert-header">
                <AlertCircle size={24} className="text-danger" />
                <h3>Weather Alerts</h3>
            </div>
            <div className="alert-content mt-3">
                <div className="alert-item warning">
                    <p className="font-bold">Heat Wave Warning</p>
                    <p className="text-sm">Expect temperatures up to 40°C in the next 48 hours. Increase irrigation frequency for sensitive crops.</p>
                </div>
                <div className="alert-item info">
                    <p className="font-bold">Light Rain Forecast</p>
                    <p className="text-sm">Scattered rainfall expected on Wednesday. Adjust spray schedules accordingly.</p>
                </div>
            </div>
        </div>
      </div>

      <div className="card mt-4">
        <h3>5-Day Forecast</h3>
        <div className="forecast-grid mt-4">
            {forecast.map(item => (
                <div key={item.day} className="forecast-item">
                    <p className="day">{item.day}</p>
                    {item.icon}
                    <p className="temp">{item.temp}</p>
                    <p className="cond">{item.condition}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;
