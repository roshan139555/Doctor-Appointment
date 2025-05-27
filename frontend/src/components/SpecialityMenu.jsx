import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center mt-20 ' id='speciality'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Find by Speciality</h1>
        <p className='pt-6 sm:text-sm md:w-1/3 text-center'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free. </p>
        <div className='flex flex-wrap justify-center mt-10 gap-6 '>
            {specialityData.map((item,index)=>(
                <Link key={index} to={`/doctors/${item.speciality}`}>
                    <img  src={item.image} alt="" />
                    <p className='mt-3 text-center'>{item.speciality}</p>
                </Link>
            ))}
        </div>
      
    </div>
  )
}

export default SpecialityMenu
