import React, { useState } from "react";

import "../styles/Tracks.css";

const tracks = [
  {
    id: 0,
    track: "Internet of Things",
    fields: [
      [
        "IoT-based Smart City Solution",
        "IoT-based Smart Home",
        "IoT in Transportation",
        "IoTbased Smart Education System",
        "IoT-based Enterprise Management",
        "IoT-based Business Process Management",
        "IoTbased Robots",
        "IoT in Automobile",
        "IoT-based Intelligent Manufacturing",
      ],
      [
        "IoT in Process Instrumentation & Automation",
        "IoT in Power Generation & Renewable Energy",
        "IoT in Design and consumer Electronics",
        "IoT in Healthcare",
        "IoT in Agriculture",
        "IoT in Green Computing",
        "IoT in UAV Application",
        "IoT Solution Reference Architectures and Instances",
        "IoT Standard Application Scenarios",
      ],
      [
        "Next Generation Infrastructure for IoT",
        "Cloud Computing (IAAS, PAAS, SAAS) for IoT",
        "Big Data For IoT",
        "Open Platforms for IoT",
        "Wearable Devices for IoT",
        "Artificial Intelligence for IoT",
        "Security",
        "Privacy",
        "Trust in IoT",
      ],
    ],
  },
  {
    id: 1,
    track: "Communication Systems",
    fields: [
      [
        "Space Applications/Satellite Communication",
        "UWB Communication System",
        "Wireless Sensor Networks and Applications",
        "5G and 6G Wireless Technology",
        "communication Theory",
        "Communication Networks and Signal Processing",
      ],
      [
        "Wireless and Optical Communications",
        "Quantum Communication and Computing",
        "Sensor Networks and Body Area Networks",
        "RADAR Communication",
        "Data Communication Network",
        "Cognitive Radio",
      ],
    ],
  },
  {
    id: 2,
    track: "Automation Technology",
    fields: [
      [
        "Industry 4.0 & Industrial Internet of Things",
        "Industrial Robotics",
        "Robot Exoskeleton",
        "Mechatronics",
        "Additive Manufacturing",
        "CAD/CAM/CIM",
        "Digital Manufacturing & Cyber Physical Systems",
        "Flexible & Recongurable Manufacturing",
        "Production Scheduling & Manufacturing Management",
        "automation in Material Handling & Logistics",
        "Optimization Algorithms",
      ],
      [
        "Computational Intelligence, Modeling & Simulation",
        "Design for Experiment",
        "Finite Element Analysis",
        "Non-Traditional Manufacturing Processes",
        "Smart Materials",
        "Composites",
        "Materials Characterization",
        "Tribology",
        "Green and Sustainable Manufacturing",
        "Green Energy and related technologies",
      ],
    ],
  },
  {
    id: 3,
    track: "Application of AI and ML in IoT Communication and Automation",
    fields: [
      [
        "Use of different AI and ML algo in IoT Communication and Automation",
        "Smart City",
        "Smart WQI estimation",
        "water uses optimization",
        "and other relevant terms",
      ],
    ],
  },
];

const Tracks = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (id) => {
    setIndex(id);
  };

  return (
    <div className='tracks'>
      <h1>Tracks</h1>
      <div className='track_headers'>
        {tracks.map(({ id, track }) => {
          //   console.log(id, track);
          return (
            <div
              className={`${index === id ? "track active" : "track"}`}
              key={id}
              onClick={() => handleClick(id)}
            >
              {track}
            </div>
          );
        })}
      </div>
      <div className='track_fields'>
        {tracks[index].fields.map((fieldGroup, key) => (
          <ul className='field_group' key={key}>
            {fieldGroup.map((field, key) => (
              <li className='field' key={key}>
                {field}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
