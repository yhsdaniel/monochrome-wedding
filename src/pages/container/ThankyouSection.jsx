import React, { useState } from 'react'
import data from '../../dataGroomBride.json'
import { AnimatePresence, motion } from 'framer-motion'
import image1 from '../../assets/images/thankyou-groombride.jpg'
import { MotionH1, MotionP } from '../components/ui/MotionOpacity'

export default function ThankyouSection() {
    const [selectedImg, setSelectedImg] = useState(null)
    return (
        <section className='relative h-full text-center flex flex-col justify-start items-center mb-10 pb-10'>
            <div className='px-8 py-4 flex flex-col justify-center items-center font-cormorantgaramond'>
                <MotionH1 className='text-xl text-center my-8'>
                    THANK YOU FOR YOUR PRAYER
                </MotionH1>
                <MotionP className='text-base'>
                    Both of us are really waiting to see you at our wedding. We hope you become a witness in a new our life.
                </MotionP>
                <MotionP className='my-8'>
                    Regards,
                </MotionP>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: 'easeIn' }}
                    className='w-56 h-80 bg-white p-1 pb-8 border border-black/30 rounded-xl'
                    onClick={() => setSelectedImg(image1)}
                >
                    <img src={image1} alt="Thanks Image" className='size-full object-cover rounded-lg' />
                    <p className='text-xl tracking-widest text-black font-dancing'>{data.men.name} & {data.women.name}</p>
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
        </section >
    )
}
