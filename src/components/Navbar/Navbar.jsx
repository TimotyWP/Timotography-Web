import React from "react";
import Logo from "../../assets/logo.png";
import { SlideBottom } from "../../utility/animation";
import { motion } from "framer-motion";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};


const Navbar = () => {
  return (
    <>
        <nav className='scroll-smooth container flex flex-row justify-around items-center py-4 md:py-8 uppercase font-semibold relative z-20 text-xs md:text-lg'>
        
          <motion.a 
            className="cursor-pointer"
            variants={SlideBottom(0.6)} 
            initial="hidden" 
            animate="visible" 
            onClick={() => scrollToSection('about')}
          >
            About</motion.a>

          <motion.a
          className="cursor-pointer"
          variants={SlideBottom(0.3)}
          initial="hidden"
          animate="visible"
          onClick={() => scrollToSection('explore')}
          >
          Explore</motion.a>

          <motion.a
            className="cursor-pointer" 
            variants={SlideBottom(0.1)} 
            initial="hidden" 
            animate="visible" 
            href=""
          >
              {" "}
              <img src={Logo} alt="" className='w-14'/></motion.a>

          <motion.a
            className="cursor-pointer"
            variants={SlideBottom(0.3)} 
            initial="hidden" 
            animate="visible" 
            onClick={() => scrollToSection('journal')}
          >
            Journal</motion.a>

          <motion.a
          className="cursor-pointer"
          variants={SlideBottom(0.6)} 
          initial="hidden" 
          animate="visible" 
          href="https://www.instagram.com/tim_wp" // Ganti dengan username Instagram Anda
          target="_blank"
          rel="noopener noreferrer"
        >
          Socials
        </motion.a>

        </nav>
    </>
  )
}

export default Navbar