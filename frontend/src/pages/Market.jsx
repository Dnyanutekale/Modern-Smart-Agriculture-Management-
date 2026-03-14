import React from 'react';
import { TrendingUp, TrendingDown, MapPin, Search } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Market.css';

const Market = () => {
  const priceData = [
    { day: '01 Mar', price: 2100 },
    { day: '05 Mar', price: 2150 },
    { day: '10 Mar', price: 2080 },
    { day: '14 Mar', price: 2200 },
  ];

  const nearbyMandis = [
    { id: 1, name: 'APMC Pune', crop: 'Wheat', price: '₹2,250', distance: '12 km', trend: 'up' },
    { id: 2, name: 'Mumbai Mandi', crop: 'Maize', price: '₹1,980', distance: '145 km', trend: 'down' },
    { id: 3, name: 'Nashik Market', crop: 'Onion', price: '₹1,450', distance: '210 km', trend: 'up' },
  ];

  return (
    <div className="market-page animate-slide-up">
      <header className="page-header">
        <div>
          <h1 className="page-title">Market Prices</h1>
          <p className="text-muted">Real-time market rates and price trends across nearby mandi locations.</p>
        </div>
      </header>

      <div className="grid-2">
        <div className="card">
            <div className="card-header-flex">
                <h3>Price Trend (Wheat)</h3>
                <span className="text-success font-bold">+4.5% this month</span>
            </div>
            <div className="chart-container-sm mt-4">
                <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={priceData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="price" stroke="#22c55e" strokeWidth={3} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>

        <div className="card">
            <div className="card-header-flex">
                <h3>Nearby Mandi Rates</h3>
                <div className="search-bar-mini">
                    <Search size={16} />
                    <input type="text" placeholder="Search Mandi..." />
                </div>
            </div>
            <div className="mandi-list mt-3">
                {nearbyMandis.map(mandi => (
                    <div key={mandi.id} className="mandi-item">
                        <div className="mandi-info">
                            <p className="font-bold">{mandi.name}</p>
                            <p className="text-xs text-muted"><MapPin size={12} /> {mandi.distance}</p>
                        </div>
                        <div className="mandi-price">
                            <p className="price-val">{mandi.price}</p>
                            <span className={`trend-icon ${mandi.trend}`}>
                                {mandi.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      <div className="card mt-4">
        <h3>Crop Support Prices (MSP 2026)</h3>
        <div className="msp-table-container mt-3">
            <table className="msp-table">
                <thead>
                    <tr>
                        <th>Crop Name</th>
                        <th>Season</th>
                        <th>MSP Rate (₹/Quintal)</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Wheat</td>
                        <td>Rabi</td>
                        <td>₹2,350</td>
                        <td className="text-success">+150</td>
                    </tr>
                    <tr>
                        <td>Maize</td>
                        <td>Kharif</td>
                        <td>₹2,090</td>
                        <td className="text-success">+110</td>
                    </tr>
                    <tr>
                        <td>Soybean</td>
                        <td>Kharif</td>
                        <td>₹4,892</td>
                        <td className="text-success">+292</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default Market;
