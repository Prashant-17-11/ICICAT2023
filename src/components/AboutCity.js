import React from "react";

import gorakhnathTemple from "../images/gorakhnath_temple.jpeg";
import ayodhya from "../images/ayodhya.jpeg";
import lumbini from "../images/lumbini.jpg";
import kushinagar from "../images/kushinagar.jpeg";
import maghar from "../images/maghar.jpg";
import geetaPress from "../images/geetaPress.jpg";

import "../styles/AboutCity.css";

const AboutCity = () => {
  return (
    <div className='aboutCity'>
      <h2>Nearby Tourist Attractions</h2>
      <ul>
        <li>
          <img src={gorakhnathTemple} />
          <a
            href='https://www.google.com/maps/place/SHREE+GORAKHNATH+TEMPLE/@26.6681234,83.1182355,11z/data=!4m10!1m2!2m1!1sgorakhnath+temple+gorakhpur!3m6!1s0x399144451ccc81ab:0x7b011a00b8780ca0!8m2!3d26.7767051!4d83.3575811!15sChtnb3Jha2huYXRoIHRlbXBsZSBnb3Jha2hwdXJaHSIbZ29yYWtobmF0aCB0ZW1wbGUgZ29yYWtocHVykgEMaGluZHVfdGVtcGxlmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU5IT0dSbFYybFJSUkFC4AEA!16s%2Fg%2F1vvr4n6v'
            target='_blank'
          >
            Gorakhnath Temple, Gorakhpur (14km)
          </a>
        </li>
        <li>
          <img src={ayodhya} />
          <a
            href='https://www.google.com/maps/place/Ayodhya,+Uttar+Pradesh/@26.7897752,82.1991678,14z/data=!3m1!4b1!4m6!3m5!1s0x399a07937e6d2823:0x5fc8f683b17f222b!8m2!3d26.7921605!4d82.1997954!16zL20vMGJrcjM'
            target='_blank'
          >
            Ayodhya, U.P (134km)
          </a>
        </li>
        <li>
          <img src={lumbini} />
          <a
            href='https://www.google.com/maps/place/Lumbini+32900,+Nepal/@27.4499952,83.2150663,13z/data=!3m1!4b1!4m6!3m5!1s0x3996eb334fe91fc1:0x5793b8b9b8917fcd!8m2!3d27.45!4d83.25!16s%2Fg%2F120sdlfv'
            target='_blank'
          >
            Lumbini, Nepal (130km)
          </a>
        </li>
        <li>
          <img src={kushinagar} />
          <a
            href='https://www.google.com/maps/place/Kushinagar,+Uttar+Pradesh/@26.7416947,83.8718719,14z/data=!3m1!4b1!4m6!3m5!1s0x3993eb9e01eae47b:0x7a8909ed5f568540!8m2!3d26.7398787!4d83.8869698!16zL20vMDFoMGxx'
            target='_blank'
          >
            Kushinagar (72km)
          </a>
        </li>
        <li>
          <img src={maghar} />
          <a
            href='https://www.google.com/maps/place/Maghar,+Uttar+Pradesh/@26.7556279,83.0932524,13.03z/data=!4m6!3m5!1s0x39913ba43f96d6a7:0xebc9600b45206864!8m2!3d26.7557109!4d83.1277242!16s%2Fm%2F02rcxhv'
            target='_blank'
          >
            Maghar (15km)
          </a>
        </li>
        <li>
          <img src={geetaPress} />
          <a
            href='https://www.google.com/maps/place/Geeta+Press,+Gorakhpur/@26.7473005,83.3459158,15z/data=!3m1!4b1!4m6!3m5!1s0x399144127cf55449:0xf1f0a95af0bb5be9!8m2!3d26.7473008!4d83.3546491!16s%2Fg%2F1hf1rm06z'
            target='_blank'
          >
            Geeta Press (11km)
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AboutCity;
