import React from 'react'
import data from '../dataGroomBride.json'
import { motion } from 'framer-motion'
import cover from '/images/cover.jpg'

export default function OpeningCover({ onClose, animationScroll }) {
    return (
        <section className={`${animationScroll} h-screen w-full fixed z-[200] bg-black/60 bg-cover bg-center bg-no-repeat bg-blend-multiply text-white flex flex-col justify-center items-center text-center`} style={{ backgroundImage: `url(${cover})` }}>
            <div className='mx-[10%] my-auto'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <p>THE WEDDING OF</p>
                    <h1 className='text-4xl my-4 uppercase tracking-wider font-cormorantgaramond'>
                        {data.men.name} & {data.women.name}
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
                    {data.date}
                </motion.p>
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className='py-2 px-4 bg-white hover:shadow-shadowHover text-black rounded-xl duration-200 ease-in-out'
                    onClick={onClose}
                >
                    Open Invitation
                </motion.button>
            </div>
        </section>
    )
}
