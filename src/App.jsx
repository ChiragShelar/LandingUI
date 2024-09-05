import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import Courses from './components/Courses/Courses'
import Roadmap from './components/Roadmap/Roadmap'
import SeatPriceComponent from './components/SeatPrice/SeatPrice'
import Testimonial from './components/Testimonial/Testimonial'

const App = () => {
  
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero setPlayState={setPlayState} />
      <Courses />
      <Roadmap />
      <SeatPriceComponent />
      <Testimonial />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App