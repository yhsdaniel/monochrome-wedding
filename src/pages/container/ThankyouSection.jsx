import React from 'react'
import { motion } from 'framer-motion'
import image1 from '../../assets/images/thankyou-groombride.jpg'
import { MotionH1, MotionP } from '../components/ui/MotionOpacity'

export default function ThankyouSection() {
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
                >
                    <img src={image1} alt="Thanks Image" className='size-full object-cover rounded-lg' />
                    <p className='text-xl tracking-widest text-black font-dancing'>Ivan & Maria</p>
                </motion.div>
            </div>
        </section >
    )
}
