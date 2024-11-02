import React, { useRef } from 'react';
import ProfileImage from "../../assets/about-pic.webp"; // Ganti dengan path foto kamu
import { motion, useInView } from "framer-motion";
import { SlideUp } from '../../utility/animation';
import { FaAngleDoubleDown } from "react-icons/fa";

const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <section className="container mx-auto py-12 px-4 md:px-0 relative" id="about" ref={ref}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                {/* Kolom Kiri: Foto */}
                <motion.div
                    variants={SlideUp(0.2)}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="w-full flex justify-center"
                >
                    <img src={ProfileImage} alt="Profile" className="w-[380px] h-[550px] object-cover rounded-lg shadow-lg" />
                </motion.div>
                
                {/* Kolom Kanan: Deskripsi Diri */}
                <motion.div
                    variants={SlideUp(0.4)}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="space-y-4 text-left"
                >
                    <h2 className="text-3xl font-semibold font-merriweather">About Me</h2>
                    <p className='text-justify'>
                        Hello! My name is Timoty Wahyudi Pakpahan, a Computer Science student with a deep passion for photography. In between my studies, I often find myself with a camera in hand, exploring the beauty of nature and capturing the little moments that might be overlooked by others.
                    </p>

                    <p className='text-justify'>
                        Photography, for me, is not just a hobby; it is a way to document my journey through life. Each photo I take tells a unique story, reflecting the experiences and emotions I felt at that moment. From breathtaking landscapes to everyday life portraits, every shot is an opportunity to share my perspective of the world.
                    </p>

                    <p className='text-justify'>
                        Through this website, I aim to showcase my photography works to you. I hope you can feel the beauty and the stories behind each image, just as I did when capturing them.
                    </p>

                    <p>
                        <br />
                        Thank you for visiting Timotography. Enjoy exploring!
                    </p>
                </motion.div>
            </div>

            {/* Tombol Scroll */}
            <motion.a
                className="cursor-pointer absolute right-4 bottom-20"
                initial="hidden"
                animate="visible"
                onClick={() => scrollToSection('explore')}
            >
                <div className="inline-flex justify-center items-center border-2 h-14 w-14 rounded-full">
                    <FaAngleDoubleDown />
                </div>
            </motion.a>
        </section>
    );
};

export default About;
