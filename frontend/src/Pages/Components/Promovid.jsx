import React from 'react';
import promo from '../../Photos/promo.mp4';
import promo2 from '../../Photos/promo2.mp4'
import promo3 from '../../Photos/promo3.mp4'
import promo4 from '../../Photos/promo4.mp4'

const Promovid = () => {
  return (
    <div>
      <video width="700" height="700" controls style={{marginLeft:"450px", marginTop:"-150px"}}>
        <source src={promo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <br />
      <br />
      <br />
      <h2 style={{textAlign:"center"}}>Patient Testimonials</h2>
      <div style={{margin:"20px" ,gap:"20px",marginLeft:"500px", marginTop:"-50px"}}>
      <video width="500" height="500" controls >
        <source src={promo2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <br />

      <video width="500" height="500" controls >
        <source src={promo3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <br />
      <video width="500" height="500" controls >
        <source src={promo4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
    </div>
  );
};

export default Promovid;
