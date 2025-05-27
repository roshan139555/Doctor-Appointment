import React from 'react'
import { doctors } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'


const TopDoctors = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col mt-20 items-center'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl pt-2.5 font-semibold'>Top Doctors to Book</h1>
      <p className='text-sm mt-5 '>Simply browse through our extensive list of trusted doctors.</p>
      <div className='flex flex-wrap mt-5 gap-7 pt-5 justify-center '>
        {doctors.slice(0,10).map((item,index)=>(
            <div onClick={()=>navigate(`/appointment/${item._id} `)} className='border rounded-md w-60 md:hover:scale-105 '>
                <img className='bg-blue-100' src={item.image} alt="" />
                <div className='flex flex-col text-sm  pt-2.5 pl-3.5 pb-5 '>
                    <div className=''>
                        <p className='text-green-500 '>Available</p>
                        </div>
                    <p className='text-sm md:text-xl font-semibold pt-1'>{item.name}</p>
                    <p className='text-sm pt-1'>{item.speciality}</p>
                </div>
                
            </div>
            
        ))}
      </div>
      <a href="/doctors"><button className='mt-5 text-sm font-semibold border p-3 pl-8 pr-8 rounded-full bg-blue-100  '>more</button></a>
      
    </div>
  )
}

export default TopDoctors
