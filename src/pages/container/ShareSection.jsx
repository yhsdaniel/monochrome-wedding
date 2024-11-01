import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import data from '../../dataGroomBride.json'
import thegroombride3 from '/images/moment/image-for-quotes.jpg'

export default function ShareSection() {
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

    const [selectedImg, setSelectedImg] = useState(null)

    return (
        <section className='mb-28'>
            <div className='flex justify-center items-center size-full my-10 px-8 md:px-6'>
                <p className='font-quicksand tracking-widest text-xs md:text-sm text-center italic font-bold'>
                    {`"${data.quotes}"`}
                </p>
            </div>
            <div className='flex justify-center items-center size-full'>
                <motion.div 
                    initial="offscreen" 
                    whileInView="onscreen" 
                    variants={motionVariants} 
                    viewport={{ once: true, amount: 0.8 }}
                    className='bg-white rounded-xl border-2 box-border overflow-hidden w-3/4 h-full block border-gray-500 drop-shadow-md shadow-lg shadow-gray-300'
                    onClick={() => setSelectedImg(thegroombride3)}
                >
                    <img 
                        src={thegroombride3} 
                        alt="Image for Quotes" 
                        className='w-full h-auto cursor-pointer p-1 rounded-xl'
                        loading='lazy' 
                    />
                </motion.div>
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
