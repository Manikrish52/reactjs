import React from 'react'
import './slider.css'
import './sliderimage/sample-1.webp'
import Carousel from 'react-bootstrap/Carousel';
import SliderImg from "../sliderarea/sliderimage/sample-1.webp"
import SliderImg2 from '../sliderarea/sliderimage/sample-2.webp'

function Slider() {
  return (
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="slider1"
          src={SliderImg}
          alt="First slide"
        />
        <Carousel.Caption className='firstslide_content'>
          <h5>NOT FRIED NOT BAKED</h5>
          <div>
           <p> Freeze Dried Friits
            <br/>
            Pineapple Coconut
           </p>
           <p>Free  Shipping On Qualified Orders $35</p>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider2"
          src={SliderImg2}
          alt="Second slide"
        />
        <Carousel.Caption className='secondslide_content'>
          <h5>100% NATURAL</h5>
          <p>Organic Fruits <br/> Summer Drinks</p>
          <p>Fresh New pack Brusting Fruits</p>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>

    
  )
}

export default Slider