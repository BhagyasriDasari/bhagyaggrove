import React from 'react';
import RecommendedEvents from '../RecommendedEvents';
import UpcomingEvents from '../UpcomingEvents';

const Banner = () => {
  return (
    <div
      className="py-24"
      style={{
        backgroundImage: `url(https://res.cloudinary.com/ddnpmhq8v/image/upload/v1711888009/Banner_ugfvjh.svg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        width: '100%',
        height: '100vh'
      }}
    >
      <p className='white-para text-xl sm:text-5xl w-6/12 mx-auto leading-10 font-bold sm:leading-loose'>
        Discover Exciting Events Happening Near You - Stay Tuned for Updates!
      </p>
      <p className='white-para text-sm sm:text-lg  w-8/12 mx-auto leading-8 text-center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      </p>
      <RecommendedEvents/>
      <UpcomingEvents />
    </div>
  );
};

export default Banner;
