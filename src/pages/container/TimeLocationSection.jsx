import React from 'react'
import ring from '../../assets/images/ring.png'
import dinner from '../../assets/images/dinner.png'
import dresscode from '../../assets/images/dresscode.png'

export default function TimeLocationSection() {
    return (
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
                    <img src={ring} alt="" className='w-3/5 m-auto h-auto rounded-xl p-5' loading='lazy' />
                </div>
                <h1 className='text-2xl font-cormorantgaramond italic'>St. Andrew Kim Tae Gon</h1>
                <p className='font-quicksand tracking-[0.2em] text-sm font-bold'>AT 2.00 PM</p>
            </div>
            <hr className='border-t-black border w-3/4 m-auto'></hr>
            <div className='relative m-auto text-center size-full my-14'>
                <h1 className='text-5xl font-darleston'>Wedding Reception</h1>
                <div className='overflow-hidden max-w-fit'>
                    <img src={dinner} alt="" className='w-3/4 m-auto h-auto rounded-xl py-5' loading='lazy' />
                </div>
                <h1 className='text-2xl font-cormorantgaramond italic'>Cabin Hotel Ballroom</h1>
                <p className='font-quicksand tracking-[0.2em] text-sm font-bold'>AT 6.00 PM</p>
            </div>
            <div className='relative m-auto text-center size-full my-10'>
                <p className='font-quicksand tracking-[0.5em] text-xs font-bold'>DRESSCODE</p>
                <div className='overflow-hidden max-w-fit'>
                    <img src={dresscode} alt="" className='w-3/5 m-auto h-auto rounded-xl py-5' loading='lazy' />
                </div>
                <div className='rounded-full bg-black w-10 h-10 m-auto'></div>
                <h1 className='text-xl font-cormorantgaramond italic'>Black Formal Attire</h1>
            </div>
            <hr className='border-t-black border w-3/4 m-auto'></hr>
        </section>
    )
}
