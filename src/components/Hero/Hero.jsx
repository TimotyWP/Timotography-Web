import React from 'react'
import { FaAngleDoubleDown } from "react-icons/fa";
import {motion} from "framer-motion";


const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};


const Hero = () => {
    return (
        <>
        <section className="min-h-[900px] flex justify-center items-center bg-gradient-to-t from-brandDark from-2% to-transparent to-15% h-full">
            {/* BACKGROUND IMAGE GRADIENT */}
            <div 
            className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black z-10"
            style={{
                background:
                    "radial-gradient(circle, rgba(0, 0, 0, 0.3) 50%, rgba(11, 11, 13, 0.5) 70%, rgba(11, 11, 13, 0.8) 90%)",
            }}
            ></div>

            {/* HERO */}
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="container relative z-20 text-center space-y-8"
            >
                <h1 className="text-5xl md:text-8xl font-bold font-merriweather mt-[-100px]">
                    Where Moments Become Timeless.
                </h1>

                <p>"Each click of the shutter is a memory preserved, a fleeting second given eternal life. Welcome to the gallery of the unforgettable."</p>
                
                <motion.a
                className="cursor-pointer"
                initial="hidden"
                animate="visible"
                onClick={() => scrollToSection('about')}
                >
                    <div className="inline-flex justify-center items-center border-2 h-14 w-14 rounded-full !mt-14 md:!mt-20" >
                        <FaAngleDoubleDown />
                    </div>
                </motion.a>
                
            </motion.div>
        </section>
        </>
    )
}

export default Hero