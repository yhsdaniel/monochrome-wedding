import React from 'react'
import { motion } from 'framer-motion'
import thegroombride from '../assets/images/gallery/potrait/thegroombride.jpg'

export default function OpeningCover({ onClose, animationScroll }) {
    return (
        <section className={`${animationScroll} h-screen w-full fixed z-[200] bg-black/40 bg-cover bg-center bg-no-repeat bg-blend-multiply text-white flex flex-col justify-center items-center text-center`} style={{ backgroundImage: `url(${thegroombride})` }}>
            <div className='mx-[10%] my-auto'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <p>THE WEDDING OF</p>
                    <h1 className='text-4xl my-4 tracking-wider font-cormorantgaramond'>
                        IVAN & MARIA
                    </h1>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className='my-10'
                >
                    We joyfully invite you to share in our happiness as we unite in marriage.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className='my-10 text-lg'
                >
                    Saturday, 7 December 2024
                </motion.p>
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className='py-2 px-4 bg-white shadow-shadowForButton text-black rounded-xl duration-150 ease-in-out'
                    onClick={onClose}
                >
                    Open Invitation
                </motion.button>
            </div>
        </section>
    )
}
