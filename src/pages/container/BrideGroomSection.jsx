import React from 'react'
import { motion } from 'framer-motion'
import thegroom from '../../assets/images/thegroom.jpg'
import thebride from '../../assets/images/thebride.jpg'
import thegroombride1 from '../../assets/images/thegroombride-1.jpg'
import thegroombride2 from '../../assets/images/thegroombride-2.jpg'
import thegroombride3 from '../../assets/images/thegroombride-3.jpg'

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

export default function BrideGroomSection() {
    return (
        <section>
            <div className='flex justify-center items-center size-full my-28'>
                <p className='font-quicksand tracking-[0.5em] text-sm font-bold'>THE GROOM & BRIDE</p>
            </div>
            <div className='flex justify-center items-center size-full'>
                <motion.div initial="offscreen" whileInView="onscreen" variants={motionVariants} viewport={{ once: true, amount: 0.8 }}
                    className='bg-white rounded-xl border-2 box-border overflow-hidden max-w-fit w-3/5 h-full block border-gray-500 drop-shadow-md shadow-lg shadow-gray-300'>
                    <img src={thegroom} alt="" className='w-full h-auto p-2 rounded-xl' loading='lazy' />
                </motion.div>
            </div>
            <div className='relative text-center mt-10'>
                <h1 className='font-cormorantgaramond text-6xl'>IVAN</h1>
                <div className='py-10 text-md font-semibold'>
                    <p className='text-sm font-quicksand tracking-widest'>SON OF</p>
                    <p className='italic font-cormorantgaramond py-5 px-5'>Mr.Lo Swie Djiang & Mrs.Lie Pik Tjiam</p>
                </div>
            </div>
            <div className='flex justify-center items-center size-full'>
                <motion.div initial="offscreen" whileInView="onscreen" variants={motionVariants} viewport={{ once: true, amount: 0.8 }}
                    className='bg-white rounded-xl border-2 box-border overflow-hidden max-w-fit w-3/5 h-full block border-gray-500 drop-shadow-md shadow-lg shadow-gray-300'>
                    <img src={thebride} alt="" className='w-full h-auto p-2 rounded-xl' loading='lazy' />
                </motion.div>
            </div>
            <div className='relative text-center mt-10'>
                <h1 className='font-cormorantgaramond text-6xl'>MARIA</h1>
                <div className='py-10 text-md font-semibold'>
                    <p className='text-sm font-quicksand tracking-widest'>SON OF</p>
                    <p className='italic font-cormorantgaramond py-5 px-5'>Mr.Ang Twan Hiong (+) & Mrs.Tjia An Hiang</p>
                </div>
            </div>
            <div className='relative size-full'>
                <motion.div initial="offscreen" whileInView="onscreen" variants={motionVariants} viewport={{ once: true, amount: 0.8 }}
                    className='overflow-hidden mx-8'>
                    <img src={thegroombride1} alt="" className='h-auto p-2 rounded-xl' loading='lazy' />
                </motion.div>
                <motion.div initial="offscreen" whileInView="onscreen" variants={motionVariants} viewport={{ once: true, amount: 0.8 }}
                    className='rounded-xl overflow-hidden mx-8'>
                    <img src={thegroombride2} alt="" className='h-auto p-2 rounded-xl' loading='lazy' />
                </motion.div>
                <motion.div initial="offscreen" whileInView="onscreen" variants={motionVariants} viewport={{ once: true, amount: 0.8 }}
                    className='rounded-xl overflow-hidden mx-8'>
                    <img src={thegroombride3} alt="" className='h-auto p-2 rounded-xl' loading='lazy' />
                </motion.div>
            </div>
        </section>
    )
}
