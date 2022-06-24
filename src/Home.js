import React, {useEffect, useRef, useState} from 'react'
import image1 from './wedding1.jpg'
import image2 from './wedding3.jpg'
import './Home.css'
import BackgroundSlider from 'react-background-slider'

export default function Home() {
 
  return (
    <section id='home'>
        <BackgroundSlider images={[image1, image2]} duration={7} transition={2} />
   
    </section>
  )
}
