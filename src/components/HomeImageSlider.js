import React, { useEffect, useState } from "react";
import img1 from "../images/carasoul1.png";
import img2 from "../images/carasoul2.png";

import "../styles/HomeImageSlider.css";

const HomeImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (current === 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  const backgroundImages = [img1, img2];

  const bgImageSlider = {
    backgroundImage: `url(${backgroundImages[current]})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
  };

  return (
    <div className='container'>
      <div style={bgImageSlider}></div>
      <div className='description'>
        <div>
          <h1>
            International Conference on <span className='organized'>IoT</span>,{" "}
            <span className='organized'>Communication</span> and{" "}
            <span className='organized'>Automation Technology</span>
          </h1>
          <p className='ieee'>IEEE Conference Record ID: 57735</p>
          <p className='organized'>
            Organized by{" "}
            <span className='ieee'>
              Buddha Institute of Technology, Gida , Gorakhpur
            </span>
            <br />
            In Collaboration with{" "}
            <span className='ieee'>Rajkiya Engineering College, Sonbhadra</span>
            <br />
            Technical association with{" "}
            <span className='ieee'>MMMUT, Gorakhpur</span>
          </p>
        </div>
        <div className='links'>
          <div>
            <i class='fa-solid fa-calendar icons'></i> June 23-24, 2023
          </div>
          <div>
            <i class='fa-sharp fa-solid fa-location-dot icons'></i> Buddha
            Institute of Technology
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeImageSlider;
