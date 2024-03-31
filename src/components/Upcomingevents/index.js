import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios.get('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming') 
      .then(response => {
        setEvents(response.data.events);
      })
      .catch(error => {
        console.error('Error fetching upcoming events:', error);
      });
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="upcoming-events">
      <div className="upcoming-header">
        <h2 className='upcoming-heading'>Upcoming Events</h2>
       
      </div>
      <div className="upcoming-events-container">
        {events.slice(0, showAll ? events.length : 10).map(event => (
          <div key={event.eventName} className="event-card">
            <img src={event.imgUrl} alt={event.eventName} className="event-image" />
           
            <div className="event-details">
              <h3>{event.eventName}</h3>
              <p>Date: {new Date(event.date).toLocaleDateString()}</p>
              <p>City: {event.cityName}</p>
              <p>Weather: {event.weather}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
