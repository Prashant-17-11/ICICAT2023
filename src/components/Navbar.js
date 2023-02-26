import React, { useState } from "react";
import logo from "../images/logo.png";

import "../styles/Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className='navbar'>
      <div className='left'>
        <a href='./'>
          {" "}
          <img src={logo} alt='logo' className='logo' />
          <span className='nav_text'>
            <span style={{ color: "var(--navbar-highlight-color)" }}>
              ICICAT
            </span>
            2023
          </span>
        </a>
      </div>
      <div>
        <ul className={toggle ? "navbar_items show" : "navbar_items"}>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#tracks'>Tracks</a>
          </li>
          <li>
            <a href='./'>Committee</a>
          </li>
          <li>
            <a href='./'>Registration</a>
          </li>
        </ul>
      </div>

      <div className='toggle' onClick={handleClick}>
        <i className={toggle ? "fas fa-times" : "fas fa-bars"} />
      </div>
    </div>
  );
};

export default Navbar;
