import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row mt-4 bg-[#5f6FFF] rounded-2xl px-6 md:px-10 lg:px-20 text-white'>
      <div className=' md:w-1/2 flex flex-col item-start justify-center py-10 gap-4 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight md:leading-tight lg:leading-tight '>Book Appointment <br />With Trusted Doctors</p>
        <div className='flex flex-col  text-sm gap-4  '>
            <img className='hidden md:flex w-28' src={assets.group_profiles} alt="" /> 
            <p className='pt-1 text-sm '>Simply browse through our extensive list of trusted doctors, <br /> schedule your appointment hassle-free.</p>
        </div>
        <a className='md:flex gap-2 border bg-white text-black p-4 w-1/2 rounded-2xl justify-center border-none text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300' href="">
            Book appointment <img src={assets.arrow_icon} alt="" />
        </a>
      </div>


      <div>
        <img className='' src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header
