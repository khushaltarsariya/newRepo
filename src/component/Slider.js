import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import photographer from './photographer.jpg'

function Slider(){
    return(
        <div style={{border:"2px solid white"}}> 
        <div className="container">
            <div className="row">
                <div className="col-md-12 mb-5 text-center ">
                    <h3 className="main-heading">Madhav</h3>
                    <div className="underline mx-auto"></div>    
                </div>
                </div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photographer}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photographer}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photographer}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        </div>
    );
}

export default Slider