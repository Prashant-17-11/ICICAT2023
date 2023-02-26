import React, { useState, useEffect } from "react";

import BIT from "../images/BIT.jpg";
import REC from "../images/REC.jpeg";

import "../styles/OrganizingPartners.css";

const OrganizingPartners = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index === 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [index]);

  const images = [
    { img: BIT, content: "Buddha Institute of Technology, Gida , Gorakhpur" },
    { img: REC, content: "Rajkiya Engineering College, Sonbhadra" },
  ];

  const bgImageSlider = {
    backgroundImage: `url(${images[index].img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    transitionTimingFunction: "ease-in-out",
    transitionDuration: "0.6s",
  };

  return (
    <div className='partners'>
      <h1>Organizing Partners</h1>
      <div className='carasoul' style={bgImageSlider}>
        <div className='carasoul_text'>{images[index].content}</div>
      </div>
    </div>
  );
};

export default OrganizingPartners;
