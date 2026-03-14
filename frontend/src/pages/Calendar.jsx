import React from 'react';
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import './Calendar.css';

const Calendar = () => {
    const events = [
        { id: 1, title: 'Irrigation Field A', date: 'Tomorrow', type: 'Irrigation', time: '06:00 AM' },
        { id: 2, title: 'Fertilizer Application', date: '18th March', type: 'Fertilizer', time: '08:30 AM' },
        { id: 3, title: 'Harvesting Wheat', date: '25th March', type: 'Harvest', time: 'All Day' },
    ];

    return (
        <div className="calendar-page animate-slide-up">
            <header className="page-header">
                <div>
                    <h1 className="page-title">Smart farm Calendar</h1>
                    <p className="text-muted">Track your sowing, irrigation, and harvesting schedules.</p>
                </div>
            </header>

            <div className="grid-custom-calendar">
                <div className="card calendar-view">
                    <div className="calendar-header-actions">
                        <h3>March 2026</h3>
                        <div className="nav-btns">
                            <button className="nav-btn"><ChevronLeft size={20} /></button>
                            <button className="nav-btn"><ChevronRight size={20} /></button>
                        </div>
                    </div>
                    <div className="calendar-grid-static mt-4">
                        <div className="days-header">
                            <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                        </div>
                        <div className="days-grid">
                            {[...Array(31)].map((_, i) => (
                                <div key={i} className={`day-cell ${i+1 === 14 ? 'today' : ''} ${[2, 5, 12, 18, 25].includes(i+1) ? 'has-event' : ''}`}>
                                    {i + 1}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="card events-panel">
                    <h3>Upcoming Activities</h3>
                    <div className="event-list mt-3">
                        {events.map(event => (
                            <div key={event.id} className="event-item">
                                <div className={`event-type-indicator ${event.type.toLowerCase()}`}></div>
                                <div className="event-content">
                                    <p className="event-title">{event.title}</p>
                                    <div className="event-meta">
                                        <span><CalendarIcon size={12} /> {event.date}</span>
                                        <span><Clock size={12} /> {event.time}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="btn btn-primary w-full mt-4">Add Custom Event</button>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
