import React, { useRef } from "react";
import Img1 from "../../assets/journal-1.webp";
import Img3 from "../../assets/journal-3.webp";
import Img4 from "../../assets/journal-4.webp";
import Img5 from "../../assets/journal-5.webp";
import { motion, useInView } from "framer-motion";
import { SlideUp } from "../../utility/animation";

const JournalData = [
    {
        id: 1,
        title: "Freeze-bee",
        about:
        "When you haven't exercised for a long time then play competitive frisbee in malaysia",
        date: "March 8, 2022",
        url: "#",
        image: Img1,
        delay: 0.2,
    },
    {
        id: 2,
        title: "Demons x Angels",
        about:
        "When you see the harmony of angels and devils in the world",
        date: "March 6, 2022",
        url: "#",
        image: Img3,
        delay: 0.6,
    },
    {
        id: 3,
        title: "The Gates of Tolerance",
        about:
        "When you are amazed by the tolerance of the bridge that connects the Istiqlal Mosque and the Cathedral Church",
        date: "March 6, 2022",
        url: "#",
        image: Img4,
        delay: 0.8,
    },
    {
        id: 4,
        title: "First-thing-First",
        about:
        "When you are stunned to see the beauty of nature from above for the first time",
        date: "March 6, 2022",
        url: "#",
        image: Img5,
        delay: 1,
    },
];

const Journal = () => {
        const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <section className="container mt-40" id="journal" ref={ref}>
            {/* HEADER */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 2, delay: 0.2 }}
                className='text-center md:max-w-[650px] mx-auto space-y-4'>
            <p className='text-3xl font-semibold font-merriweather'>
                Memories in Focus
            </p>
            <p>
            Step into a gallery of experiences, where every image is a doorway to a different place, emotion, or moment. Each shot in this journal is more than a picture; it's a piece of life, frozen and preserved for you to revisit anytime. Dive in and let the stories unfold.
            </p>
            </motion.div>

            {/* PHOTOS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center mt-20">
                {JournalData.map((data) => (
                <motion.div
                    variants={SlideUp(data.delay)} 
                    initial="hidden" 
                    animate={isInView ? "visible" : "hidden"}
                    key={data.id}
                >
                <div className="overflow-hidden">
                <img src={data.image} alt="" 
                className="w-full h-[350px] object-cover"/>
                </div>

                {/* PHOTOS DESCRIPTION */}
                <div className="space-y-1 py-6 text-center px-12">
                    <p className="uppercase">{data.date}</p>
                    <p className="text-xl font-semibold font-merriweather">{data.title}</p>
                    <p className="!mt-8">{data.about}</p>
                </div>
                </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Journal;
