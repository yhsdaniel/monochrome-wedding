import React from 'react'
import Banner from '../../components/Banner'
import { motion } from 'framer-motion'
import thegroombride from '../../assets/images/gallery/thegroombride.jpg'

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
                    <div className='text-6xl tracking-widest font-cormorantgaramond'>
                        <h1>IVAN</h1>
                        <h1>MARIA</h1>
                    </div>
                    <div className='font-dancing text-xl'>
                        <p>7 December 2024</p>
                    </div>
                </motion.div>
            </Banner>
        </section>
    )
}
