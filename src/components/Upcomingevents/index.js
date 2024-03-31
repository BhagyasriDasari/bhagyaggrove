import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingSpinner from '../LoadingSpinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import './index.css';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [fetching, setFetching] = useState(false);

  const fetchUpcomingEvents = async () => {
    try {
      setFetching(true);
      const response = await axios.get(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`);
      const newEvents = response.data || []; // Initialize as an empty array if response.data is undefined
      if (Array.isArray(newEvents)) {
        setEvents(prevEvents => [...prevEvents, ...newEvents]);
        setPage(prevPage => prevPage + 1);
      } else {
        console.error('Error fetching upcoming events: Response data is not an array');
      }
      setFetching(false);
    } catch (error) {
      console.error('Error fetching upcoming events:', error);
      setFetching(false);
    }
  };
  

  useEffect(() => {
    fetchUpcomingEvents();
  }, []);

  const loadMoreEvents = () => {
    if (!fetching) {
      fetchUpcomingEvents();
    }
  };

  return (
    <section className="upcoming-events">
      <h2>Upcoming Events</h2>
      <div className="upcoming-events-container">
        <InfiniteScroll
          dataLength={events.length}
          next={loadMoreEvents}
          hasMore={hasMore}
          loader={<LoadingSpinner />}
          scrollThreshold={0.9} // Load more when 90% of the page is scrolled
        >
          {/* Map through events and render event cards */}
        </InfiniteScroll>
      </div>
    </section>
  );
};

export default UpcomingEvents;