import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';

const RecommendedEvents = () => {
  const [events, setEvents] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios.get('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco')
      .then(response => {
        setEvents(response.data.events);
      })
      .catch(error => {
        console.error('Error fetching recommended events:', error);
      });
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="recommended-events">
      <h2>Recommended Events</h2>
      <div className="recommended-events-container">
        {events.slice(0, showAll ? events.length : 4).map(event => (
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
      {!showAll && <button onClick={toggleShowAll}>See All</button>}
    </section>
  );
};

export default RecommendedEvents;
