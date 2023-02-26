import React from "react";
import profile from "../images/profile.png";

import "../styles/Committee.css";
import "../styles/AllCommittee.css";

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
    title: "General Chairs",
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
    ],
  },
  {
    title: "Technical Chairs",
    persons: [
      {
        img: profile,
        title:
          "Dr. Sudhir Agarwal, Buddha Institute of Technology, Gorakhpur, India",
      },
      {
        img: profile,
        title: "Dr. Dharmendra Dixit, REC Sonbhadra, India",
      },
      {
        img: profile,
        title: "Mr. Prashant Pandey, REC Sonbhadra, India",
      },
      {
        img: profile,
        title: "Dr. Robin Singh, IEEE MP Section, India",
      },
    ],
  },
  {
    title: "Organizing Chairs",
    persons: [
      {
        img: profile,
        title:
          "Mr. Ankur Kumar, Buddha Institute of Technology, Gorakhpur, India",
      },
      {
        img: profile,
        title:
          "Mr. Anshu Kumar Dwivedi, Buddha Institute of Technology, Gorakhpur, India",
      },
      {
        img: profile,
        title: "Dr. Ravi Prakash Tripathi, REC Sobhadra, India",
      },
    ],
  },
  {
    title: "Covenors",
    persons: [
      {
        img: profile,
        title: "Dr. Saiyed Salim Sayeed, BIT Gorakhpur, India",
      },
      {
        img: profile,
        title: "Dr. R.K. Patel, REC Sonbhadra, India",
      },
    ],
  },
  {
    title: "Publicity Chairs",
    persons: [
      {
        img: profile,
        title:
          "Mr. Ujjwal Srivastava, Buddha Institute of Technology, Gorakhpur, India",
      },
      {
        img: profile,
        title:
          "Dr. Mohd. Gulman Siddiqui, Banasthali Vidyapith University, Rajasthan, India",
      },
      {
        img: profile,
        title: "Mr. Amrees Pandey, University of Allahabad, India",
      },
      {
        img: profile,
        title:
          "Mr. Vivek Paswan, Jawaharlal Nehru University, New Delhi, India",
      },
      {
        img: profile,
        title: "Mr. Piyush Kumar Mishra, MNNIT Allahabad, India",
      },
      {
        img: profile,
        title: "Mrs. Kalpana Singh, REC Sonbhadra, India",
      },
      {
        img: profile,
        title: "Mr. Ashish Ranjan Mishra, REC Sonbhadra, India",
      },
    ],
  },
  {
    title: "Technical Program Committee",
    persons: [
      {
        img: profile,
        title:
          "Dr. E. Muthu Kumaran, Dr. B R Ambedkar Institute of Technology, Port Blair, India",
      },
      {
        img: profile,
        title:
          "Dr. Sheo K. Mishra, Indira Gandhi National Tribal University, Madhya Pradesh",
      },
      {
        img: profile,
        title: "Dr. Ambrish Maurya, NIT, Patna, India",
      },
      {
        img: profile,
        title: "Dr. Brijesh Mishra, SIET Prayagraj, India",
      },
      {
        img: profile,
        title: "Dr. Shashwat Pathak, MIET Meerut, India",
      },
      {
        img: profile,
        title: "Dr. Kamakshi Kumari, NSUT, New Delhi",
      },
      {
        img: profile,
        title: "Dr. Anurag Mishra, ISDC, University, Rajasthan, India",
      },
      {
        img: profile,
        title:
          "Dr. Rajiv Singh, Banasthali Vidyapith University, Rajasthan, India",
      },
      {
        img: profile,
        title:
          "Dr. Akhilesh Pandey, College of Engineering, Pandharpur Solapur, Maharashtra, India",
      },
      {
        img: profile,
        title: "Dr. Mahendra Tiwari, University of Allahabad, India",
      },
      {
        img: profile,
        title: "Dr. Shree Prakash Tiwari, IIT-Jodhpur, Rajasthan, India",
      },
      {
        img: profile,
        title: "Dr. Khushboo Tripathi, Amity University Gurgaon, India",
      },
      {
        img: profile,
        title:
          "Dr. Shivesh Tripathi, Galgotias University, Greater Noida, India",
      },
      {
        img: profile,
        title: "Dr. Astit A. Kumar, NSUT, Delhi, India",
      },
    ],
  },
  {
    title: "Advisory Committee",
    persons: [
      {
        img: profile,
        title:
          "Prof. Niesh Goel, Birla Institute of Technology (Dubai Campus), Duabi",
      },
      {
        img: profile,
        title: "Prof. Kumar Vaibhav Srivastava, IIT Kanpur, India",
      },
      {
        img: profile,
        title: "Prof. B. D. Gupta, IIT Kanpur, India",
      },
      {
        img: profile,
        title:
          "Prof. Adhir Baran Chattopadyay, BBIT, Kolkata, West Bengal, India",
      },
      {
        img: profile,
        title: "Prof. Tanveer J. Siddiqui, University of Allahabad, India",
      },
      {
        img: profile,
        title:
          "Prof. N. Guruprasad, Global Academy of Technology, Bengaluru, India",
      },
      {
        img: profile,
        title: "Prof. Manish Dixit, IETE Gwalior, India",
      },
      {
        img: profile,
        title: "Prof. Saibai Mukherjee, IEEE, MP Section",
      },
      {
        img: profile,
        title: "Dr. Amit Kumar Singh, IIT BHU, Varansi, India",
      },
      {
        img: profile,
        title: "Prof. Ashish Khara, University of Allahabad, India",
      },
      {
        img: profile,
        title: "Prof. Suneet Dwivedi, University of Allahabad, India",
      },
      {
        img: profile,
        title: "Prof. Arvind Sharma, NIT Kurukshetra, India",
      },
      {
        img: profile,
        title: "Prof. Mayank Garg, ITS Ghaziabad, India",
      },
      {
        img: profile,
        title:
          "Prof. N. P. Yadav, Hubei Polytechnic University, Huangshi, China",
      },
      {
        img: profile,
        title: "Prof. Rajeev Kumar Chauhan, MMMUT Gorakhpur, India",
      },
      {
        img: profile,
        title: "Prof. Shantanu Rastogi, D.D.U. University, Gorakhpur, India",
      },
    ],
  },
];

const AllCommittee = () => {
  return (
    <div className='committee committee_container'>
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
    </div>
  );
};

export default AllCommittee;
