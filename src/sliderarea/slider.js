import React from 'react'
import './slider.css'
import './sliderimage/sample-1.webp'
import Carousel from 'react-bootstrap/Carousel';
import SliderImg from "../sliderarea/sliderimage/sample-1.webp"
import SliderImg2 from '../sliderarea/sliderimage/sample-2.webp'

function Slider() {
  return (
        <Carousel data-bs-theme="dark" className='carousel-content'>
      <Carousel.Item>
        <img
        id='firstimage-content'
          className="slider1"
          src={SliderImg}
          alt="First slide"
        />
        <Carousel.Caption className='firstslide_content'>
          <div className='firstcarousel-title'>
          <h5 className='top'>NOT FRIED NOT BAKED</h5>
          <div>
           <p className='middle'> Freeze Dried Friits
            <br/>
            Pineapple Coconut
           </p>
           <p className='bottom'>Free  Shipping On Qualified Orders $35</p>
            </div>
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
          <div className='secondcarousel-title'>
          <h5 className='top'>100% NATURAL</h5>
          <p className='middle'>Organic Fruits <br/> Summer Drinks</p>
          <p className='bottom'>Fresh New pack Brusting Fruits</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>

    
  )
}

export default Slider