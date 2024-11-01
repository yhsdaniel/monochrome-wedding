import React from 'react'
import data from '../../dataGroomBride.json'
import thegroombride from '/images/thegroombride.jpg'
import { motion } from 'framer-motion'

export default function BannerDesktopSection() {
    return (
        <div className='h-full md:w-7/12 lg:w-8/12 fixed bg-black/30 bg-no-repeat bg-cover bg-center bg-blend-multiply flex flex-col justify-center items-center text-white' style={{ backgroundImage: `url(${thegroombride})` }}>
            <motion.p
                initial={{ opacity: 0, translateX: 100 }}
                whileInView={{ opacity: 1, translateX: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                The Wedding of
            </motion.p>
            <motion.p
                initial={{ opacity: 0, translateX: 100 }}
                whileInView={{ opacity: 1, translateX: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className='text-4xl my-4 uppercase tracking-widest font-cormorantgaramond'
            >
                {`${data.men.name} & ${data.women.name}`}
            </motion.p>
            <motion.p
                initial={{ opacity: 0, translateX: 100 }}
                whileInView={{ opacity: 1, translateX: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                {data.date}
            </motion.p>
        </div>
    )
}
