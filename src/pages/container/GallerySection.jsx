import React, { useState } from 'react'
import { AnimatePresence, easeOut, motion } from 'framer-motion'
import potrait1 from '../../assets/images/potrait-1.jpg'
import potrait2 from '../../assets/images/potrait-2.jpg'
import landscape1 from '../../assets/images/landscape-1.jpg'
import landscape2 from '../../assets/images/landscape-2.jpg'
import landscape3 from '../../assets/images/landscape-3.jpg'
import landscape4 from '../../assets/images/landscape-4.jpg'

const imagesSecondRow = [
    {
        image: landscape3,
    },
    {
        image: landscape4,
    },
    {
        image: potrait2,
    }
]

const imageFirstRow = [
    {
        image: potrait1
    },
    {
        image: landscape1
    },
    {
        image: landscape2
    },
]

const motionVariants = {
    offscreen: {
        opacity: 0,
    },
    onscreen: {
        opacity: 1,
        transition: {
            type: "ease-out",
            duration: 1.5
        }
    }
};

export default function GallerySection() {
    const [selectedImg, setSelectedImg] = useState(null)
    return (
        <section className='h-full bg-black px-4 py-8 flex flex-col justify-center items-center'>
            <div className='image-grid'>
                {/* First Column */}
                <div className='image-grid-child'>
                    {imageFirstRow.map((item, index) => (
                        <motion.div
                            key={index}
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={motionVariants}
                            viewport={{ once: true }}
                            onClick={() => setSelectedImg(item.image)}
                        >
                            <img
                                src={item.image}
                                alt={`Gallery image ${index}`}
                                width={500}
                                height={900}
                                loading='lazy'
                                className='cursor-pointer w-full h-auto object-cover'
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Second Column */}
                <div className='image-grid-child'>
                    {imagesSecondRow.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            onClick={() => setSelectedImg(item.image)}
                        >
                            <img
                                src={item.image}
                                alt={`Gallery image ${index}`}
                                width={500}
                                height={900}
                                loading='lazy'
                                className='cursor-pointer w-full h-auto object-cover'
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        className="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImg(null)}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100vw",
                            height: "100vh",
                            zIndex: 100,
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <motion.img
                            src={selectedImg}
                            alt="Enlarged image"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{ maxHeight: "90%", maxWidth: "90%" }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
