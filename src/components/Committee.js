import React from "react";
import profile from "../images/profile.png";

import "../styles/Committee.css";

const posts = [
  {
    title: "Chief Patron(s)",
    persons: [
      {
        img: profile,
        title:
          "Dr. R. A. Agarwal (Chairman) Buddha Institute of Technology, Gorakhpur, India",
      },
      {
        img: profile,
        title:
          "Dr. Rajat Agarwal, Secretary Buddha Institute of Technology, Gorakhpur, India",
      },
      {
        img: profile,
        title: "Prof. Sri Niwas Singh (Director) IIIT Gwalior, India",
      },
    ],
  },
  {
    title: "Patron(s)",
    persons: [
      {
        img: profile,
        title:
          "Prof. Geetam Singh Tomar (Director), Rajkiya Engineering College Sonbhadra (U.P.-INDIA)",
      },
      {
        img: profile,
        title:
          "Prof. Arvind Kumar Pandey (Director) , Buddha Institute of Technology, Gorakhpur, India",
      },
    ],
  },
  {
    title: "Event Speaker(s)",
    persons: [
      {
        img: profile,
        title: "Dr. Sash Singh, Secon Cha, IEEE, UP Secon",
      },
      {
        img: profile,
        title: "Dr. Akhilesh Tiwari, IIIT Allahabad, India",
      },
      {
        img: profile,
        title: "Dr. D.K. Tripathi, REC Sonbhadra, India",
      },
      {
        img: profile,
        title: "Dr. Sash Singh, Secon Cha, IEEE, UP Secon",
      },
      {
        img: profile,
        title: "Dr. Akhilesh Tiwari, IIIT Allahabad, India",
      },
      {
        img: profile,
        title: "Dr. D.K. Tripathi, REC Sonbhadra, India",
      },
    ],
  },
];

const Committee = () => {
  return (
    <div className='committee'>
      {posts.map((post) => (
        <div className='post'>
          <h2 className='post_title'>{post.title}</h2>
          <div className='persons'>
            {post.persons.map((person) => (
              <div className='person_card'>
                <img
                  className='person_profile'
                  src={person.img}
                  alt='profile'
                />
                <div className='person_title'>{person.title}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button className='register'>
        <a href='./committee'>Explore more members</a>
      </button>
    </div>
  );
};

export default Committee;
