import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import Login from '../pages/Login';


const Navbar = () => {
    const navigate = useNavigate();
    const [token,setToken ] = useState(true);
    const [showMenu ,setShowMenu] = useState(false);


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
        {
            token ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4'>
                  <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                  <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div> : <button onClick={()=>navigate('/login')} className='border rounded-4xl  pb-2.5 pt-2.5 pr-6 pl-6 text-white bg-blue-600'>
            Create Account
        </button>
        }
        
    </div>
  )
}

export default Navbar
