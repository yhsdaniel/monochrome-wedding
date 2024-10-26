import React from 'react'
import { motion } from 'framer-motion'
import thegroom from '../../assets/images/gallery/potrait/thegroom.jpg'
import thebride from '../../assets/images/gallery/potrait/thebride.jpg'
import thegroombride1 from '../../assets/images/gallery/landscape/image1.jpg'
import thegroombride2 from '../../assets/images/gallery/potrait/image3.jpg'
import thegroombride3 from '../../assets/images/gallery/landscape/image1.jpg'
import { MotionDiv, MotionH1 } from '../components/ui/MotionOpacity'

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
        <section className='mb-10'>
            <div className='flex justify-center items-center size-full my-10'>
                <p className='font-quicksand tracking-[0.5em] text-sm font-bold'>THE GROOM & BRIDE</p>
            </div>
            <div className='flex flex-col justify-center items-center size-full mb-4'>
                <motion.div initial="offscreen" whileInView="onscreen" variants={motionVariants} viewport={{ once: true, amount: 0.8 }}
                    className='bg-white rounded-xl border-2 box-border overflow-hidden max-w-fit w-3/5 h-full block border-gray-500 drop-shadow-md shadow-lg shadow-gray-300'>
                    <img src={thegroom} alt="" className='w-full h-auto p-1 rounded-xl' loading='lazy' />
                </motion.div>
                <div className='relative text-center mt-4'>
                    <MotionH1 className='font-cormorantgaramond text-4xl'>
                        IVAN
                    </MotionH1>
                    <MotionDiv className='py-4 text-md font-semibold'>
                        <p className='text-sm font-quicksand tracking-widest'>SON OF</p>
                        <p className='italic font-cormorantgaramond py-5 px-5'>Mr.Lo Swie Djiang & Mrs.Lie Pik Tjiam</p>
                    </MotionDiv>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center size-full'>
                <motion.div initial="offscreen" whileInView="onscreen" variants={motionVariants} viewport={{ once: true, amount: 0.8 }}
                    className='bg-white rounded-xl border-2 box-border overflow-hidden max-w-fit w-3/5 h-full block border-gray-500 drop-shadow-md shadow-lg shadow-gray-300'>
                    <img src={thebride} alt="" className='w-full h-auto p-1 rounded-xl' loading='lazy' />
                </motion.div>
                <div className='relative text-center mt-4 mb-10'>
                    <MotionH1 className='font-cormorantgaramond text-4xl'>
                        MARIA
                    </MotionH1>
                    <MotionDiv className='py-4 text-md font-semibold'>
                        <p className='text-sm font-quicksand tracking-widest'>DAUGHTER OF</p>
                        <p className='italic font-cormorantgaramond py-5 px-5'>Mr.Ang Twan Hiong (+) & Mrs.Tjia An Hiang</p>
                    </MotionDiv>
                </div>
            </div>

            {/* Grid Image */}
            <div className='relative size-full'>
                <motion.div initial="offscreen" whileInView="onscreen" variants={motionVariants} viewport={{ once: true, amount: 0.8 }}
                    className='overflow-hidden mx-8'>
                    <img src={thegroombride1} alt="" className='h-auto' loading='lazy' />
                </motion.div>
                <motion.div initial="offscreen" whileInView="onscreen" variants={motionVariants} viewport={{ once: true, amount: 0.8 }}
                    className='overflow-hidden mx-8'>
                    <img src={thegroombride2} alt="" className='h-auto my-1' loading='lazy' />
                </motion.div>
                <motion.div initial="offscreen" whileInView="onscreen" variants={motionVariants} viewport={{ once: true, amount: 0.8 }}
                    className='overflow-hidden mx-8'>
                    <img src={thegroombride3} alt="" className='h-auto' loading='lazy' />
                </motion.div>
            </div>
            {/* Grid Image */}
        </section>
    )
}
