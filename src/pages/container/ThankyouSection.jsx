import React from 'react'
import { motion } from 'framer-motion'
import image1 from '../../assets/images/gallery/potrait/image1.jpg'

export default function ThankyouSection() {
    return (
        <section className='relative h-full text-center flex flex-col justify-start items-center mb-10 pb-10'>
            <div className='px-8 py-4 flex flex-col justify-center items-center font-cormorantgaramond'>
                <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='text-2xl text-center my-8'
                >
                    Thank you for your prayer
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='text-base'
                >
                    Both of us are really waiting to see you at our wedding. We hope you become a witness in a new our life.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='my-8'
                >
                    Regards,
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className='w-56 h-80 bg-white p-2 pb-8 border border-black/30 rounded-xl'
                >
                    <img src={image1} alt="Thanks Image" className='size-full object-cover rounded-lg' />
                    <p className='text-xl tracking-widest text-black font-dancing'>Ivan & Maria</p>
                </motion.div>
            </div>
        </section >
    )
}
