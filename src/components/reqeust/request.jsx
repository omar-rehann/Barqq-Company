import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import req1 from "../../img/reqone.webp"
import req2 from "../../img/req2.webp"
import req3 from "../../img/reqthree.webp"
import "./request.css"

function Request(){

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return(
    <div className="request">
      <div className="container">

        <Carousel activeIndex={index} onSelect={handleSelect} fade>

          <Carousel.Item>
            <img className="carousel-img" src={req1} alt="slide1"/>
            <div className="overlay">
              <h2>Maintenance Services</h2>
              <p>The best home maintenance services</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <img className="carousel-img" src={req2} alt="slide2"/>
            <div className="overlay">
              <h2>Professional Team</h2>
              <p>Over 10 years of experience</p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <img className="carousel-img" src={req3} alt="slide3"/>
            <div className="overlay">
              <h2>Fast Service</h2>
              <p>We reach you in no time</p>
            </div>
          </Carousel.Item>

        </Carousel>

      </div>
    </div>
  )
}

export default Request