import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex items-center justify-between border-b text-sm py-4'>
      <img src={assets.logo} alt=''/>
        <ul className=' hidden md:flex items-center gap-4 font-medium '>
            <NavLink to='/'>
                <li className='py-1'>HOME</li>
                <hr className=' border-none outline-none w-3/5 m-auto hidden h-0.5 bg-[#5f6FFF] '/>
            </NavLink>
            <NavLink to='/doctors'>
                <li className='py-1'>ALL DOCTORS</li>
                <hr className='border-none  outline-none w-3/5 m-auto hidden h-0.5 bg-[#5f6FFF]'/>
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>ABOUT</li>
                <hr className=' border-none outline-none w-3/5 m-auto hidden h-0.5 bg-[#5f6FFF]'/>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>CONTACT</li>
                <hr className=' border-none outline-none w-3/5 m-auto hidden h-0.5 bg-[#5f6FFF]'/>
            </NavLink>
        </ul>
        <button className='border rounded-4xl  pb-2.5 pt-2.5 pr-6 pl-6 text-white bg-blue-600'>
            Create Account
        </button>
    </div>
  )
}

export default Navbar
