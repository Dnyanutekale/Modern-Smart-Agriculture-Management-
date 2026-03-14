import React from 'react';
import { BarChart3, TrendingUp, DollarSign, Sprout } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import './Analytics.css';

const Analytics = () => {
  const yieldData = [
    { name: 'Maize', yield: 4500 },
    { name: 'Wheat', yield: 3800 },
    { name: 'Rice', yield: 5200 },
    { name: 'Sugarcane', yield: 12000 },
  ];

  const expenseData = [
    { name: 'Seeds', value: 400 },
    { name: 'Fertilizer', value: 800 },
    { name: 'Pesticide', value: 300 },
    { name: 'Labor', value: 1200 },
  ];

  const COLORS = ['#22c55e', '#3b82f6', '#ef4444', '#eab308'];

  return (
    <div className="analytics-page animate-slide-up">
      <header className="page-header">
        <div>
          <h1 className="page-title">Analytics Dashboard</h1>
          <p className="text-muted">In-depth insights into crop performance, expenses, and profit projections.</p>
        </div>
      </header>

      <div className="grid-3 stats-grid">
        <div className="card stat-card">
            <div className="stat-icon-bg success">
                <Sprout size={24} />
            </div>
            <div>
                <p className="stat-label">Total Yield</p>
                <h3 className="stat-value">25.5 Tons</h3>
            </div>
        </div>
        <div className="card stat-card">
            <div className="stat-icon-bg primary">
                <DollarSign size={24} />
            </div>
            <div>
                <p className="stat-label">Avg. Market Rate</p>
                <h3 className="stat-value">₹2,450 / Quintal</h3>
            </div>
        </div>
        <div className="card stat-card">
            <div className="stat-icon-bg warning">
                <TrendingUp size={24} />
            </div>
            <div>
                <p className="stat-label">Est. Profit</p>
                <h3 className="stat-value">₹4.2 Lakhs</h3>
            </div>
        </div>
      </div>

      <div className="grid-2 mt-4">
        <div className="card chart-card">
          <h3>Yield by Crop (Kg)</h3>
          <div className="chart-container mt-4">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={yieldData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="yield" fill="#22c55e" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card chart-card">
          <h3>Expense Breakdown</h3>
          <div className="chart-container mt-4">
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={expenseData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {expenseData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
            <div className="pie-legend">
                {expenseData.map((item, index) => (
                    <div key={item.name} className="legend-item">
                        <div className="dot" style={{ backgroundColor: COLORS[index] }}></div>
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
