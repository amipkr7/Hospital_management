import React from 'react'
import Promovid from './Promovid.jsx'
const Biography = (props) => {
  return (
    <>
    <div className='container biography'>
        <div className="banner">
          <img src={props.image_url} alt="biography" />
        </div>

        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>The United Group of Medical Sciences (UGMS) is a pioneering institution committed to advancing healthcare globally. Founded in [Year], UGMS has become a beacon of excellence in medical research, education, and patient care.</p>
          <p>With a mission to improve health outcomes and empower communities, UGMS operates at the forefront of medical innovation. Our team of dedicated professionals, including renowned researchers, educators, and healthcare providers, collaborates tirelessly to tackle the most pressing challenges in healthcare.</p> 
          <p>Through cutting-edge research initiatives, UGMS strives to push the boundaries of medical knowledge and develop innovative solutions to complex health issues. Our state-of-the-art facilities and laboratories provide a dynamic environment for exploration and discovery.</p>
          <p>In addition to our research efforts, UGMS is committed to nurturing the next generation of healthcare professionals. We offer comprehensive educational programs, including undergraduate and postgraduate studies, continuing medical education, and professional development opportunities.

          </p>
       </div>
    </div>
    <Promovid/>
    </>
  )
}

export default Biography
