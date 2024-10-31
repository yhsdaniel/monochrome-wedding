import React from 'react'
import { motion } from 'framer-motion'
import thegroom from '../../assets/images/thegroom.jpg'
import thebride from '../../assets/images/thebride.jpg'
import thegroombride1 from '../../assets/images/moment/image1.jpg'
import thegroombride2 from '../../assets/images/moment/potrait.jpg'
import thegroombride3 from '../../assets/images/moment/image3.jpg'
import { MotionA, MotionDiv, MotionH1 } from '../components/ui/MotionOpacity'

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
                <div className='relative text-center mt-4 flex flex-col justify-center items-center'>
                    <MotionH1 className='font-cormorantgaramond text-4xl'>
                        IVAN
                    </MotionH1>
                    <MotionA href={'https://www.instagram.com/st.iphan/'} className='w-auto flex justify-center items-center py-1 px-3 bg-[#f2f2f4] shadow-shadowForButton border-[#50505096] duration-150 ease-in-out rounded-3xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-instagram mx-1" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                        </svg>
                        <span>st.iphan</span>
                    </MotionA>
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
                <div className='relative text-center mt-4 mb-10 flex flex-col justify-center items-center'>
                    <MotionH1 className='font-cormorantgaramond text-4xl'>
                        MARIA
                    </MotionH1>
                    <MotionA href={'https://www.instagram.com/angmariaa_/'} className='w-auto flex justify-center items-center py-1 px-3 bg-[#f2f2f4] shadow-shadowForButton border-[#50505096] duration-150 ease-in-out rounded-3xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-instagram mx-1" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                        </svg>
                        <span>angmariaa_</span>
                    </MotionA>
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
