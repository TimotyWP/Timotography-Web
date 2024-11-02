import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import HeroImg from './assets/hero.jpg'
import Explore from './components/Explore/Explore'
import Journal from './components/Journal/Journal'
import Footer from './components/Footer/Footer'
import About from './components/About/About'


const bgImage = {
  backgroundImage: `url(${HeroImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  backgroundSize: "cover",
  position: "relative",
}

const App = () => {
  return (
    <div className='overflow-x-hidden bg-clrBlack text-white'>
      <div style={bgImage}>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Explore />
      <Journal />
      <Footer />
    </div>
  )
}

export default App