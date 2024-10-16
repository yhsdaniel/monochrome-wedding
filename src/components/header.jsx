import React from 'react'
import { IoIosMenu } from 'react-icons/io'

const Header = ({menu=false, logo=''}) => {
  return (
    <div className='fixed bg-transparent w-full h-16 p-5 text-white'>
        <div className='flex justify-between font-cormorantgaramond tracking-widest'>
            {
                logo ? <p className='text-xl'>{logo}</p> : null
            }
            {
                menu ? <IoIosMenu size={30}/> : null
            }
        </div>
    </div>
  )
}

export default Header