import React from 'react'
import data from '../../dataGroomBride.json'
import Banner from '../components/Banner'
import { motion } from 'framer-motion'
import thegroombride from '/images/thegroombride.jpg'

export default function BannerSection() {
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
        <section>
            <Banner imageFile={thegroombride}>
                <motion.div initial="offscreen" whileInView="onscreen" variants={motionVariants} viewport={{ once: true, amount: 0.8 }} className='relative text-white text-sm text-center'>
                    <div className='font-quicksand tracking-[0.5em]'>
                        <p>THE WEDDING OF</p>
                    </div>
                    <div className='text-5xl uppercase tracking-widest font-cormorantgaramond'>
                        <h1>{data.men.name}</h1>
                        <h1>{data.women.name}</h1>
                    </div>
                    <div className='font-dancing text-xl'>
                        <p>{data.date}</p>
                    </div>
                </motion.div>
            </Banner>
        </section>
    )
}
