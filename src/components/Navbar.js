import React, { useState } from "react";
import logo from "../images/logo.jpeg";

import "../styles/Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className='navbar'>
      <div>
        <a href='./'>
          {" "}
          <img src={logo} alt='logo' className='logo' />
        </a>
      </div>
      <div>
        <ul className={toggle ? "navbar_items show" : "navbar_items"}>
          <li>
            <a href='./'>Home</a>
          </li>
          <li>
            <a href='./'>About</a>
          </li>
          <li>
            <a href='./'>Tracks</a>
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
