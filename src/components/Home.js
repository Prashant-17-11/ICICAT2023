import React from "react";

import About from "./About";
import AboutCity from "./AboutCity";
import Committee from "./Committee";
import HomeImageSlider from "./HomeImageSlider";
import OrganizingPartners from "./OrganizingPartners";
import Tracks from "./Tracks";
import Venue from "./Venue";

import "../styles/Home.css";

const Home = () => {
  return (
    <div className='home_container'>
      <HomeImageSlider />
      <About />
      <Tracks />
      <Committee />
      <AboutCity />
      <Venue />
      <OrganizingPartners />
    </div>
  );
};

export default Home;
