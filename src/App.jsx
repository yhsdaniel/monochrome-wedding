import { useState } from 'react'
import { motion } from "framer-motion"

import banner1 from './assets/images/banner1.jpg'
import frame from './assets/images/flowerframe.jpg'
import couples1 from './assets/images/couples1.jpg'
import couples2 from './assets/images/couples2.jpg'
import couples3 from './assets/images/couples3.jpg'
import couples4 from './assets/images/couples4.jpg'
import couples5 from './assets/images/couples5.jpg'
import ring from './assets/images/ring.png'
import dinner from './assets/images/dinner.png'
import dresscode from './assets/images/dresscode.png'

import Banner from './components/banner'
import Header from './components/header'

import './App.css'
import GallerySection from './pages/container/GallerySection'
import RSVPSection from './pages/container/RSVPSection'

function App() {
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
    <>
      <div className='container size-full'>
        <section>
          <Header menu={true} logo='I & M'/>
        </section>
        <section>
          <Banner imageFile={banner1}>
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
        <section>
          <div className='size-full'>
            <motion.div initial="offscreen" whileInView="onscreen" variants={motionVariants} viewport={{ once: true, amount: 0.8 }} 
              className={`flex -z-20 m-auto justify-center items-center w-96 h-96 bg-contain bg-no-repeat bg-center bg-frame`}>
              <p className='text-lg font-quicksand tracking-widest'>#MARIAIVAN</p>
            </motion.div>
          </div>
        </section>
        <section>
          <div className='flex justify-center items-center size-full my-20'>
            <p className='font-quicksand tracking-widest text-sm font-bold'>SHARE THE DAY ON INSTAGRAM</p>
          </div>
          <div className='flex justify-center items-center size-full'>
            <motion.div initial="offscreen" whileInView="onscreen" variants={motionVariants} viewport={{ once: true, amount: 0.8 }}
              className='bg-white rounded-xl border-2 box-border overflow-hidden w-3/4 h-full block border-gray-500 drop-shadow-md shadow-lg shadow-gray-300'>
              <img src={couples1} alt="" className='w-full h-auto p-2 rounded-xl' loading='lazy'/>
            </motion.div>
          </div>
        </section>
        <section>
          <div className='flex justify-center items-center size-full my-28'>
            <p className='font-quicksand tracking-[0.5em] text-sm font-bold'>THE GROOM & BRIDE</p>
          </div>
          <div className='relative text-center'>
            <h1 className='font-cormorantgaramond text-6xl'>IVAN</h1>
            <div className='py-10 text-md font-semibold'>
              <p className='text-sm font-quicksand tracking-widest'>SON OF</p>
              <p className='italic font-cormorantgaramond py-5 px-5'>Mr.Johan Andrianto & Mrs.Heri FebruariNingsih</p>
            </div>
          </div>
          <div className='flex justify-center items-center size-full'>
            <motion.div initial="offscreen" whileInView="onscreen" variants={motionVariants} viewport={{ once: true, amount: 0.8 }}
              className='bg-white rounded-xl border-2 box-border overflow-hidden max-w-fit w-3/5 h-full block border-gray-500 drop-shadow-md shadow-lg shadow-gray-300'>
              <img src={couples2} alt="" className='w-full h-auto p-2 rounded-xl' loading='lazy'/>
            </motion.div>
          </div>
          <div className='relative text-center mt-10'>
            <h1 className='font-cormorantgaramond text-6xl'>MARIA</h1>
            <div className='py-10 text-md font-semibold'>
              <p className='text-sm font-quicksand tracking-widest'>SON OF</p>
              <p className='italic font-cormorantgaramond py-5 px-5'>Mr.Mario & Mrs.Maria</p>
            </div>
          </div>
          <div className='relative size-full'>
            <motion.div initial="offscreen" whileInView="onscreen" variants={motionVariants} viewport={{ once: true, amount: 0.8 }}
              className='overflow-hidden max-w-fit'>
              <img src={couples3} alt="" className='w-3/4 m-auto h-auto p-2 rounded-xl' loading='lazy'/>
            </motion.div>
            <motion.div initial="offscreen" whileInView="onscreen" variants={motionVariants} viewport={{ once: true, amount: 0.8 }}
              className='rounded-xl overflow-hidden max-w-fit'>
              <img src={couples5} alt="" className='w-3/4 m-auto h-auto p-2 rounded-xl' loading='lazy'/>
            </motion.div>
            <motion.div initial="offscreen" whileInView="onscreen" variants={motionVariants} viewport={{ once: true, amount: 0.8 }}
              className='rounded-xl overflow-hidden max-w-fit'>
              <img src={couples4} alt="" className='w-3/4 m-auto h-auto p-2 rounded-xl' loading='lazy'/>
            </motion.div>
          </div>
        </section>
        <section>
          <div className='flex justify-center items-center size-full my-28'>
            <p className='font-quicksand tracking-[0.5em] text-sm font-bold'>THE WEDDING</p>
          </div>
          <div className='relative m-auto text-center size-full my-10'>
            <p className='font-dancing text-3xl'>Saturday, 7 December 2024</p>
            <p className='font-cormorantgaramond text-xl italic py-5'>St. Andrew Kim Tae Gon</p>
            <div className='py-5'>
              <a href='https://www.google.com/maps/place/St.+Andrew+Kim+Tae+Gon+Catholic+Church/@-6.1737434,106.9133891,17z/data=!3m1!4b1!4m6!3m5!1s0x2e698b2a887d4349:0xf63bd51233940aba!8m2!3d-6.1737487!4d106.915964!16s%2Fg%2F119pg1_8s?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
                className='font-quicksand tracking-widest text-sm border-2 font-semibold border-gray-500 rounded-lg py-3 px-7'>
                OPEN MAPS
              </a>
            </div>
          </div>
          <div className='relative m-auto text-center size-full my-14'>
            <h1 className='text-5xl font-darleston'>Holy Matrimony</h1>
            <div className='overflow-hidden max-w-fit'>
              <img src={ring} alt="" className='w-3/5 m-auto h-auto rounded-xl p-5' loading='lazy'/>
            </div>
            <h1 className='text-2xl font-cormorantgaramond italic'>St. Andrew Kim Tae Gon</h1>
            <p className='font-quicksand tracking-[0.2em] text-sm font-bold'>AT 2.00 PM</p>
          </div>
          <hr className='border-t-black border w-3/4 m-auto'></hr>
          <div className='relative m-auto text-center size-full my-14'>
            <h1 className='text-5xl font-darleston'>Wedding Reception</h1>
            <div className='overflow-hidden max-w-fit'>
              <img src={dinner} alt="" className='w-3/4 m-auto h-auto rounded-xl py-5' loading='lazy'/>
            </div>
            <h1 className='text-2xl font-cormorantgaramond italic'>Cabin Hotel Ballroom</h1>
            <p className='font-quicksand tracking-[0.2em] text-sm font-bold'>AT 6.00 PM</p>
          </div>
          <div className='relative m-auto text-center size-full my-10'>
            <p className='font-quicksand tracking-[0.5em] text-xs font-bold'>DRESSCODE</p>
            <div className='overflow-hidden max-w-fit'>
              <img src={dresscode} alt="" className='w-3/5 m-auto h-auto rounded-xl py-5' loading='lazy'/>
            </div>
            <div className='rounded-full bg-black w-10 h-10 m-auto'></div>
            <h1 className='text-xl font-cormorantgaramond italic'>Black Formal Attire</h1>
          </div>
          <hr className='border-t-black border w-3/4 m-auto'></hr>
        </section>
        <GallerySection />
        <RSVPSection />
      </div>
    </>
  )
}

export default App