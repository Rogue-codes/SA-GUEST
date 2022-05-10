import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
import bg1 from '../Assets/sa.jpeg'
import bg2 from '../Assets/sch.jpeg'
import bg3 from '../Assets/hsp.jpg'
function CarouselComponent() {
    // useEffect(()=>{
    //     Aos.init({duration : 3000})
    // },[])
  
    return (
    <Carousel className='carousel-container' >
    <Carousel.Item className='carousel-slide' interval={3000}>
    <img
      className="d-block w-100"
      src={bg1}
      alt="First slide"
    />
      <Carousel.Caption   data-aos="fade-left" className='caption'>
        <h3 className='text'>sa-guest 360</h3>
        <p>Your One Stop Visitor Management Portal</p>
        <Link to='/home'>TRY DEMO</Link>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='carousel-slide' interval={3000}>
    <img
      className="d-block w-100"
      src={bg2}
      alt="First slide"
    />
      <Carousel.Caption data-aos="fade-left" className='caption'>
        <h3>sa-guest for Schools</h3>
        <p>Round the clock reliablity.</p>
        <Link to='/home'>TRY DEMO</Link>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='carousel-slide' interval={3000}>
    <img
      className="d-block w-100"
      src={bg3}
      alt="First slide"
    />
      <Carousel.Caption data-aos="fade-left" className='caption'>
      <h3>sa-guest for Hospitals</h3>
        <p>Stay ahead of the competition.</p>
        <Link to='/home'>TRY DEMO</Link>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    )
  }
  
  export default CarouselComponent