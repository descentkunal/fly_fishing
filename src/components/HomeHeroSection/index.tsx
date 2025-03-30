import React from 'react';
import './style.css';
import banner from '../../assets/banner.png';

const HomeHeroSection: React.FC = () => {
  return (
    <div className="home-wrapper">
      <div className="home-left">
        <div className="home-heading">Central Texas Fly Fishing</div>
        <p className="home-description">
          At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus
          vestibulum, facilisi ac, sed faucibus.
        </p>
        <button className="home-button">Get started</button>
      </div>

      <div className="home-right">
        <img src={banner} alt="Banner" className="home-banner" />
      </div>
    </div>
  );
};

export default HomeHeroSection;
