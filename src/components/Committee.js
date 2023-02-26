import React from "react";
import profile from "../images/profile.png";
import pdf from "../pdfs/committeeMembers.pdf";

import "../styles/Committee.css";

const Committee = () => {
  return (
    <div className='committee'>
      <div className='post'>
        <h2 className='post_title'>Chief Patron(s)</h2>
        <div className='persons'>
          <div className='person_card'>
            <img className='person_profile' src={profile} alt='profile' />
            <div className='person_title'>
              Dr. R. A. Agarwal (Chairman) Buddha Institute of Technology,
              Gorakhpur, India
            </div>
          </div>
          <div className='person_card'>
            <img className='person_profile' src={profile} alt='profile' />
            <div className='person_title'>
              Dr. Rajat Agarwal, Secretary Buddha Institute of Technology,
              Gorakhpur, India
            </div>
          </div>
          <div className='person_card'>
            <img className='person_profile' src={profile} alt='profile' />
            <div className='person_title'>
              Prof. Sri Niwas Singh (Director) IIIT Gwalior, India
            </div>
          </div>
        </div>
      </div>
      <div className='post'>
        <h2 className='post_title'>Patron(s)</h2>
        <div className='persons'>
          <div className='person_card'>
            <img className='person_profile' src={profile} alt='profile' />
            <div className='person_title'>
              Prof. Geetam Singh Tomar (Director), Rajkiya Engineering College
              Sonbhadra (U.P.-INDIA)
            </div>
          </div>
          <div className='person_card'>
            <img className='person_profile' src={profile} alt='profile' />
            <div className='person_title'>
              Prof. Arvind Kumar Pandey (Director) , Buddha Institute of
              Technology, Gorakhpur, India
            </div>
          </div>
        </div>
      </div>
      <div className='post'>
        <h2 className='post_title'>Event Speaker(s)</h2>
        <div className='persons'>
          <div className='person_card'>
            <img className='person_profile' src={profile} alt='profile' />
            <div className='person_title'>
              Dr. R. A. Agarwal (Chairman) Buddha Institute of Technology,
              Gorakhpur, India
            </div>
          </div>
          <div className='person_card'>
            <img className='person_profile' src={profile} alt='profile' />
            <div className='person_title'>
              Dr. Rajat Agarwal, Secretary Buddha Institute of Technology,
              Gorakhpur, India
            </div>
          </div>
          <div className='person_card'>
            <img className='person_profile' src={profile} alt='profile' />
            <div className='person_title'>
              Prof. Sri Niwas Singh ( Director) IIIT Gwalior, India
            </div>
          </div>
          <div className='person_card'>
            <img className='person_profile' src={profile} alt='profile' />
            <div className='person_title'>
              Dr. R. A. Agarwal (Chairman) Buddha Institute of Technology,
              Gorakhpur, India
            </div>
          </div>
          <div className='person_card'>
            <img className='person_profile' src={profile} alt='profile' />
            <div className='person_title'>
              Dr. Rajat Agarwal, Secretary Buddha Institute of Technology,
              Gorakhpur, India
            </div>
          </div>
          <div className='person_card'>
            <img className='person_profile' src={profile} alt='profile' />
            <div className='person_title'>
              Prof. Sri Niwas Singh ( Director) IIIT Gwalior, India
            </div>
          </div>
        </div>
      </div>
      <button className='register'>
        <a href={pdf} target='_blank'>
          Explore more members
        </a>
      </button>
    </div>
  );
};

export default Committee;
