import React from 'react';
import Header from './components/Header';
import RecommendedEvents from './components/RecommendedEvents';
import UpcomingEvents from './components/Upcomingevents'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <RecommendedEvents />
        <UpcomingEvents />
      </main>
     
    </div>
  );
};

export default App;