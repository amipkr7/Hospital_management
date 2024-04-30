import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import pedia from '../../Photos/pedia.jpg';
import cardio from '../../Photos/cardio.jpg';
import derma from '../../Photos/derma.jpg';
import ent from '../../Photos/ent.jpg';
import ortho from '../../Photos/ortho.jpg';
import onco from '../../Photos/onco.jpg';
import neuro from '../../Photos/neuro.jpg';
import therapy from '../../Photos/therapy.jpg';
import radio from '../../Photos/radio.jpg';

const Departments = () => {
  const docList = [
    { name: "Pediatricians", imageUrl: pedia },
    { name: "Orthopedics", imageUrl: ortho },
    { name: "Cardiology", imageUrl: cardio },
    { name: "Neurology", imageUrl: neuro },
    { name: "Oncology", imageUrl: onco },
    { name: "Radiology", imageUrl: radio },
    { name: "Physical Therapy", imageUrl: therapy },
    { name: "Dermatology", imageUrl: derma },
    { name: "ENT", imageUrl: ent }
  ];

  const responsive = {
    extraLarge: { breakpoint: { max: 3000, min: 1324 }, items: 4 },
    large: { breakpoint: { max: 1324, min: 1005 }, items: 3 },
    medium: { breakpoint: { max: 1005, min: 700 }, items: 2 },
    small: { breakpoint: { max: 700, min: 0 }, items: 1 }
  };

  return (
    <div className='container departments'>
      <h3>Departments</h3>
      
      <Carousel responsive={responsive} removeArrowOnDeviceType={["medium", "small"]}>
        {docList.map((depart, index) => (
          <div className="card" key={index}>
            <div className='depart-name'>{depart.name}</div>
            <img src={depart.imageUrl} alt={depart.name} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Departments;
