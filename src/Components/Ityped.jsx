import React, { useEffect, useRef } from 'react'
import { init } from 'ityped'

function Ityped() {
  const textRef = useRef()
  useEffect(() => {
    init(textRef.current, { 
      showCursor: true, 
      typeSpeed:  15,
      backSpeed:  15,
      startDelay: 1500,
      backDelay:  1000,
      strings: ['Trust the future!' ] })
  },[])
  return (
    <div className="typed">
      <h1>Our Brand Story</h1>
      <p>ORANGE is passionate about the future, committed to tomorrow and laser-focused on building a pan-African world-class financial institution with innovation, agility and strength at its heart</p>
      <h2>TRUST ORANGE,<span ref={textRef}></span></h2>
      
    </div>
  )
}

export default Ityped