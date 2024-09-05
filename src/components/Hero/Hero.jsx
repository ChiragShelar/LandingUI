import React from 'react'
import './Hero.css'
import learning from '../../assets/learning.jpg'
import play from '../../assets/play.png'
import star from '../../assets/E-learning.png'

const Hero = ({setPlayState}) => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Get The Best Online Learning Service</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius mattis ullamcorper. 
            Donec eu vestibulum nunc. Quisque tempus nunc dolor, quis condimentum arcu vehicula eget. 
            </p>
            <button className='btn'>Start a Course</button>
        </div>
        <div className='play-overlay-container'>
            <img className='learning' src={learning} alt="" />
            <img className='play' src={play} alt="" onClick={() => 
            {setPlayState(true)}} />
        </div>
        <div className='circle-image'>
            <img src={star} alt="" />
        </div>
    </div>
  )
}

export default Hero