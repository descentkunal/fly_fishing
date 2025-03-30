import React from 'react';
import './style.css';
import banner from '../../assets/banner.png';

const HomeHeroSection: React.FC = () => {
  return (
    <div className="home-wrapper">
      <div className="home-left">
        <h1 className="home-heading">Central Texas Fly Fishing</h1>
        <p className="home-description">
          At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus
          vestibulum, facilisi ac, sed faucibus.
        </p>
        <button className="home-button">Get Started</button>
      </div>

      <div className="home-right">
        <img src={banner} alt="Banner" className="home-banner" />
      </div>
    </div>
  );
};

export default HomeHeroSection;
