import React from 'react'
import data from '../../dataGroomBride.json'
import ring from '../../assets/images/ring.png'
import dinner from '../../assets/images/dinner.png'

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
                <h1 className='text-2xl px-2 font-cormorantgaramond italic'>{`${data.church.name}`}</h1>
                <p className='font-quicksand tracking-[0.2em] my-4 text-sm font-bold'>{data.church.time} WIB</p>
                <div className='py-5'>
                    <a
                        onClick={() => window.open(`${data.church.googlemaps}`)}
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
                <h1 className='text-2xl px-2 font-cormorantgaramond italic'>{`${data.receptions.name}`}</h1>
                <p className='font-quicksand tracking-[0.2em] my-4 text-sm font-bold'>{data.receptions.time} WIB</p>
                <div className='py-5'>
                    <a
                        onClick={() => window.open(`${data.receptions.googlemaps}`)}
                        className='cursor-pointer font-quicksand tracking-widest text-sm border-2 font-semibold border-gray-500 rounded-lg py-3 px-7 hover:bg-black/80 hover:text-white duration-75 ease-in-out'>
                        OPEN MAPS
                    </a>
                </div>
            </div>
            <hr className='border-t-black border w-3/4 m-auto'></hr>
        </section>
    )
}
