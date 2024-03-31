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

  const images = [
    {
      id: 1,
      url: 'https://res.cloudinary.com/ddnpmhq8v/image/upload/v1711890246/Rectangle_34_g05kuj.svg'
    },
    {
      id: 2,
      url: 'https://res.cloudinary.com/ddnpmhq8v/image/upload/v1711890243/Rectangle_2_kf1ynr.svg'
    },
    {
      id: 3,
      url: 'https://res.cloudinary.com/ddnpmhq8v/image/upload/v1711890242/Rectangle_4-1_ts4woa.svg'
    },
    {
      id: 4,
      url: 'https://res.cloudinary.com/ddnpmhq8v/image/upload/v1711890239/Rectangle_5-1_psaqvk.svg'
    },
    {
      id: 5,
      url: 'https://res.cloudinary.com/ddnpmhq8v/image/upload/v1711890221/Rectangle_4_panwpe.svg'
    },
    {
      id: 6,
      url: 'https://res.cloudinary.com/ddnpmhq8v/image/upload/v1711890218/Rectangle_5-2_yzo32h.svg'
    },
    {
      id: 7,
      url: 'https://res.cloudinary.com/ddnpmhq8v/image/upload/v1711890218/Rectangle_5_znhhof.svg'
    }
  ];

  
  return (
    <section className="recommended-events">
      <div className="recommended-header">
        <h2 className='recommended-heading'>Recommended Events</h2>
        <button onClick={toggleShowAll} className="see-all-btn">See All</button>
      </div>
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
    </section>
  );
};

export default RecommendedEvents;
