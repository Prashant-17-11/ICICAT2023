import React from "react";

import "../styles/About.css";

const About = () => {
  return (
    <div className='about'>
      <h1>
        <span style={{ color: "var(--navbar-highlight-color)" }}>ICICAT</span>
        2023
      </h1>
      <p>
        "IEEE Uttar Pradesh Section International Conference on on IoT,
        Communication & Automation Technology (ICICAT-2023)" is top level
        International Conference covering broad topics in the areas of
        Electrical, Computer, Civil, Mechanical and Electronics & Communication
        Engineering will be organized next year by Buddha Institute of
        Technology (BIT), Gorakhpur (Uttar Pradesh), India.
      </p>
      <p id='tracks'>
        This conference will provide an excellent platform to the researchers to
        present their research work and is known as the UP-section's conference.
        The conference is technically sponsored by IEEE UP Section. There are
        multiple tracks in the conference covering almost all areas of
        Electrical, Computer, Civil, Mechanical and Electronics & Communication
        Engineering. Uttar Pradesh
      </p>
    </div>
  );
};

export default About;
