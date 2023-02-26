import React from "react";

import "../styles/Venue.css";

const Venue = () => {
  return (
    <div className='venue'>
      <h2>Venue</h2>
      <div className='venue_container'>
        <div className='venue_details'>
          <p>
            Buddha Institute of Technology CL-1, Gida Sector-7, Gorakhpur Uttar
            Pradesh 273209 India
          </p>
          <p>
            <i className='fa-solid fa-phone'></i> +91 94156 64165
          </p>
          <p>
            <i className='fa-solid fa-envelope'></i> icicat23@bit.ac.in
          </p>
        </div>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14252.63663838802!2d83.26270768752353!3d26.739296632555305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399147380139859b%3A0x708768ccb2c065c9!2sBuddha%20Institute%20of%20Technology%20%2C%20Gorakhpur!5e0!3m2!1sen!2sin!4v1677175967596!5m2!1sen!2sin'
          style={{ border: 0 }}
          allowfullscreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </div>
  );
};

export default Venue;
