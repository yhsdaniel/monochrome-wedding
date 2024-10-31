import React from 'react'
import ring from '../../assets/images/ring.png'
import dinner from '../../assets/images/dinner.png'
import dresscode from '../../assets/images/dresscode.png'

export default function TimeLocationSection() {
    return (
        <section className='my-20'>
            <div className='flex justify-center items-center size-full'>
                <p className='font-quicksand tracking-[0.5em] text-base font-bold'>TIME AND LOCATION</p>
            </div>
            <div className='relative m-auto text-center size-full my-14'>
                <h1 className='text-3xl tracking-[0.2em] font-greatvibes'>Holy Matrimony</h1>
                <div className='overflow-hidden'>
                    <img src={ring} alt="" className='w-3/5 m-auto h-auto rounded-xl p-5' loading='lazy' />
                </div>
                <h1 className='text-2xl px-2 font-cormorantgaramond italic'>St. Andrew Kim Tae Gon</h1>
                <p className='font-quicksand tracking-[0.2em] my-4 text-sm font-bold'>14.00 WIB</p>
                <div className='py-5'>
                    <a
                        onClick={() => window.open('https://www.google.com/maps/place/St.+Andrew+Kim+Tae+Gon+Catholic+Church/@-6.1737434,106.9133891,17z/data=!3m1!4b1!4m6!3m5!1s0x2e698b2a887d4349:0xf63bd51233940aba!8m2!3d-6.1737487!4d106.915964!16s%2Fg%2F119pg1_8s?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D')}
                        className='cursor-pointer font-quicksand tracking-widest text-sm border-2 font-semibold border-gray-500 rounded-lg py-3 px-7 hover:bg-black/80 hover:text-white duration-75 ease-in-out'>
                        OPEN MAPS
                    </a>
                </div>
            </div>
            <hr className='border-t-black border w-3/4 m-auto'></hr>
            <div className='relative m-auto text-center size-full my-14'>
                <h1 className='text-3xl tracking-[0.2em] font-greatvibes'>Wedding Reception</h1>
                <div className='overflow-hidden max-w-fit'>
                    <img src={dinner} alt="" className='w-3/4 m-auto h-auto rounded-xl py-5' loading='lazy' />
                </div>
                <h1 className='text-2xl px-2 font-cormorantgaramond italic'>Arlyda Grand Ballroom (Cabin Hotel)</h1>
                <p className='font-quicksand tracking-[0.2em] my-4 text-sm font-bold'>19.00 WIB</p>
                <div className='py-5'>
                    <a
                        onClick={() => window.open('https://www.google.com/maps/place/Arlyda+Grand+Ballroom/@-6.147714,106.888332,15z/data=!4m6!3m5!1s0x2e69f560cefa445b:0x85db8bd1d2dfe19d!8m2!3d-6.147714!4d106.888332!16s%2Fg%2F11rfblf7jn?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D')}
                        className='cursor-pointer font-quicksand tracking-widest text-sm border-2 font-semibold border-gray-500 rounded-lg py-3 px-7 hover:bg-black/80 hover:text-white duration-75 ease-in-out'>
                        OPEN MAPS
                    </a>
                </div>
            </div>
            <hr className='border-t-black border w-3/4 m-auto'></hr>
        </section>
    )
}
