import React, { useRef } from 'react';
import Img1 from "../../assets/explore-1.webp";
import Img2 from "../../assets/explore-2.webp";
import Img3 from "../../assets/explore-3.webp";
import { motion, useInView } from "framer-motion";
import { SlideUp } from '../../utility/animation';


const ExploreData = [
  {
    id: 1,
    title: "Cathedral Serenity",
    place: "Indonesia",
    url: "#",
    image: Img1,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Harbor of Peace",
    place: "Malaysia",
    url: "#",
    image: Img2,
    delay: 0.4,
  },
  {
    id: 3,
    title: "Mystic Cave",
    place: "Malaysia",
    url: "#",
    image: Img3,
    delay: 0.6,
  },
];


const Explore = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <>
    <section className='container' id='explore' ref={ref}>

    {/* HEADER */}
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: isInView ? 1 : 0 }} // Animate opacity based on view
    transition={{ duration: 2, delay: 0.2 }}
    className='text-center md:max-w-[650px] mx-auto space-y-4'>
      <p className='text-3xl font-semibold font-merriweather'>
        A World Unseen
      </p>
      <p>
        Every place has a soul, and every photo reveals a glimpse of it. Venture into these untouched paradises, as each image invites you to witness a beauty that transcends time and place.
      </p>
    </motion.div>


    {/* PHOTOS */}
    <div className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center'>

      {ExploreData.map((data) => (
        <motion.div 
        variants={SlideUp(data.delay)} 
        initial="hidden" 
        animate={isInView ? "visible" : "hidden"}
        key={data.id} 
        className='relative'
      >
          <img src={data.image} alt="" className='w-[380px] h-[550px] object-cover'
        />

          <div className='absolute w-full bottom-0 inset-0 bg-clrBlack/15'>
            <div className='h-full space-y-1 py-6 flex flex-col justify-end items-center'>
              <h3 className='text-2xl font-semibold'>{data.title}</h3>
              <p className='uppercase'>{data.place}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* BUTTON */}
    <button className='block mx-auto mt-6 text-clrBlue uppercase font-bold'>See More</button>
      
    </section>
    </>
  )
}

export default Explore