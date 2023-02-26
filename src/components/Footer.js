import React from "react";

import recLogo from "../images/recLogo.png";
import bitLogo from "../images/bitLogo.png";

import IEEEPaperFormat from "../pdfs/IEEE-paper-format.pdf";
import CopyrightForm from "../pdfs/IEEECopyrightForm_ICE2M2023.doc";
import CameraPaper from "../pdfs/ICE2M2023CRC-Template-A4.doc";
import RegistrationForm from "../pdfs/registration_form.pdf";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_logo'>
        <img src={bitLogo} alt='bit' className='line' />
        <img src={recLogo} alt='bit' />
      </div>
      <div className='quick_links'>
        <h2>Quick Links</h2>
        <ul>
          <li>
            <a
              href='https://cmt3.research.microsoft.com/ICACITE2023'
              target='_blank'
              rel='noreferrer'
            >
              To Submit a paper in ICICAT 2023 CLICK HERE
            </a>
          </li>
          <li>
            <a
              href='https://www.ieee.org/publications/rights/plagiarism/plagiarism.html'
              target='_blank'
              rel='noreferrer'
            >
              IEEE Web Page on Plagiarism:
            </a>
          </li>
          <li>
            <a href={IEEEPaperFormat} target='_blank' rel='noreferrer'>
              Paper Format
            </a>
          </li>
          <li>
            <a href={CopyrightForm} target='_blank' rel='noreferrer'>
              Copyright form
            </a>
          </li>
          <li>
            <a href={CameraPaper} target='_blank' rel='noreferrer'>
              IEEE Paper Template for Camera Ready Paper
            </a>
          </li>
          <li>
            <a href={RegistrationForm} target='_blank' rel='noreferrer'>
              Registration Form Download
            </a>
          </li>
        </ul>
      </div>
      <div className='contact_info'>
        <h2>Contact Information</h2>
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
    </div>
  );
};

export default Footer;
