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
                    className={`flex -z-20 m-auto justify-center items-center w-96 h-96 bg-contain bg-no-repeat bg-center bg-frame`}>
                    <p className='text-lg font-quicksand tracking-widest'>#VANtasticMARiage</p>
                </motion.div>
            </div>
        </section>
    )
}
