import React, { useEffect, useState } from "react";
import img1 from "../images/carasoul1.jpg";
import img2 from "../images/carasoul2.png";
import img3 from "../images/carasoul3.jpeg";
import img4 from "../images/carasoul4.jpg";
import img5 from "../images/carasoul5.jpg";
import img6 from "../images/carasoul6.jpg";
import img7 from "../images/carasoul7.jpg";

import "../styles/HomeImageSlider.css";

const HomeImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (current === 6) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [current]);

  const backgroundImages = [img4, img1, img2, img3, img5, img6, img7];

  const bgImageSlider = {
    backgroundImage: `url(${backgroundImages[current]})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
    transitionTimingFunction: "ease-in-out",
    transitionDuration: "0.6s",
  };

  return (
    <>
      <div className='container' id='home'>
        <div style={bgImageSlider}></div>
        <div className='description'>
          <div>
            <h1>
              International Conference on <span className='organized'>IoT</span>
              , <span className='organized'>Communication</span> and{" "}
              <span className='organized'>Automation Technology</span> 2023
            </h1>
            <p className='ieee'>
              IEEE Conference Record ID:{" "}
              <span style={{ color: "var(--text-highlight-color)" }}>
                57735
              </span>
            </p>
            <p>
              Organized by{" "}
              <span className='ieee'>
                Buddha Institute of Technology, Gida , Gorakhpur
              </span>
              <br />
              In Collaboration with{" "}
              <span className='ieee'>
                Rajkiya Engineering College, Sonbhadra
              </span>{" "}
              and
              <br />
              Technical association with{" "}
              <span className='ieee'>MMMUT, Gorakhpur</span>
            </p>
          </div>
          <div className='links'>
            <div>
              <i className='fa-solid fa-calendar icons'></i> June 23-24, 2023
            </div>
            <div>
              <i className='fa-sharp fa-solid fa-location-dot icons'></i> Buddha
              Institute of Technology
            </div>
          </div>
          <div id='about' />
        </div>
      </div>
    </>
  );
};

export default HomeImageSlider;
