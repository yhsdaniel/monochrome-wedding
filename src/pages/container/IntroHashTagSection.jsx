import React from 'react'
import { motion } from 'framer-motion'

export default function IntroHashTagSection() {
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
            <div className='size-full'>
                <motion.div initial="offscreen" whileInView="onscreen" variants={motionVariants} viewport={{ once: true, amount: 0.8 }}
                    className={`-z-20 m-auto flex justify-center items-center w-80 h-80 lg:w-96 lg:h-96 bg-cover bg-no-repeat bg-center bg-frame`}>
                    <p className='text-lg italic font-quicksand tracking-widest'>#VANtasticMARiage</p>
                </motion.div>
            </div>
        </section>
    )
}
