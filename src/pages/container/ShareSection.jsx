import React from 'react'
import { motion } from 'framer-motion'
import thegroombride3 from '../../assets/images/gallery/landscape/image1.jpg'

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

    return (
        <section className='mb-28'>
            <div className='flex justify-center items-center size-full my-10'>
                <p className='font-quicksand tracking-widest text-sm font-bold'>SHARE THE DAY ON INSTAGRAM</p>
            </div>
            <div className='flex justify-center items-center size-full'>
                <motion.div initial="offscreen" whileInView="onscreen" variants={motionVariants} viewport={{ once: true, amount: 0.8 }}
                    className='bg-white rounded-xl border-2 box-border overflow-hidden w-3/4 h-full block border-gray-500 drop-shadow-md shadow-lg shadow-gray-300'>
                    <img src={thegroombride3} alt="" className='w-full h-auto p-2 rounded-xl' loading='lazy' />
                </motion.div>
            </div>
        </section>
    )
}
