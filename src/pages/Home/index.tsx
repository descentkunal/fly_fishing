import React from "react";
import HomeHeroSection from "../../components/HomeHeroSection";
import HomeAccordion from "../../components/HomeAccordian";
import HomeMemberStories from "../../components/HomeMemberStories";

const Home: React.FC = () => {
  return (
    <div>
      <HomeHeroSection />
      <HomeAccordion />
      <HomeMemberStories />
    </div>
  );
};

export default Home;
