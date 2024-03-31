import React from 'react';
import { IoMdMenu } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import "./index.css";
    
    const Header = () => {
      return (
        <nav className="navbar">
          <div className="search-container">
            <h1 className="heading">BookUsNow</h1>
            <div className="mobile-icon-container">
              <FaSearch className="search-icon" />
              <FaHeart className="favoutite-icon" />
              <FaUser />
            </div>
            <div className="category-search-container">
              <button className="categories-btn">
                <IoMdMenu className="category-icon" />
                Categories
              </button>
              <div className="search-box">
                <input
                  type="search"
                  placeholder="DJI phantom"
                  className="search-input"
                />
                <FaSearch className="search-icon" />
              </div>
            </div>
            <div className="button-container">
              <button className="favourites-btn">
                <FaHeart className="favoutite-icon" />
                Favourites
              </button>
              <button className="signin-btn">Sign in</button>
            </div>
          </div>
          <button className="location-btn">
            <FaLocationDot className="location-icon" />
            Mumbai, India {">"}
          </button>
    
          <ul className="links-container">
            <li className="link">Live shows</li>
            <li className="link">Streams</li>
            <li className="link">Movies</li>
            <li className="link">Plays</li>
            <li className="link">Events</li>
            <li className="link">Sports</li>
            <li className="link">Activities</li>
          </ul>
        </nav>
      );
    };
    
export default Header;