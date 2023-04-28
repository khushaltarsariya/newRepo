import React from 'react';
import VMC from './VMC';
import Slider from './Slider';

function About(){
    return(
        <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>About us</h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">
                Home/About Us
              </h6>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-light border-bottom">
        <div className="container">
          <h5 className="main-heading">Our Company</h5>
          <div className="underline"></div>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </p>
        </div>
      </section>
      <VMC/>
      <Slider/>
    </div>
    
    );
}

export default About