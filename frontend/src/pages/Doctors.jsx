import React, { useContext } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useState } from 'react'
import { useEffect } from 'react'

const Doctors = () => {

  const {speciality} = useParams()
  const {doctors} = useContext(AppContext)
  const [filterDoc,setFilterDoc] = useState([])

  const applyFilter = ()=>{
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
      
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[speciality,doctors])

  const navigate = useNavigate()


  return (
    
    <div className='mt-10 '>
      <p className=' font-semibold'>Browse through the doctors specialist.</p>
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-24'>
        <div className='flex flex-row lg:flex-col gap-2 lg:gap-4 mb-4 lg:mb-0 overflow-x-auto lg:overflow-visible'>
          <p onClick={()=> speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className='border flex p-2 pl-2 text-sm rounded-sm  sm:w-[130%] '>General physician</p>
          <p onClick={()=> speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className='border flex p-2 pl-2 text-sm rounded-sm  sm:w-[130%] '>Gynecologist</p>
          <p onClick={()=> speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className='border flex p-2 pl-2 text-sm rounded-sm  sm:w-[130%] '>Dermatologist</p>
          <p onClick={()=> speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className='border flex p-2 pl-2 text-sm rounded-sm  sm:w-[130%] '>Pediatricians</p>
          <p onClick={()=> speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className='border flex p-2 pl-2 text-sm rounded-sm  sm:w-[130%] '>Neurologist</p>
          <p onClick={()=> speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/')} className='border flex p-2 pl-2 text-sm rounded-sm  sm:w-[130%] '>Gastroenterologist</p>
        </div>
        <div className='  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6 w-full '>
          {
            filterDoc.map((item,index)=>(
            <div onClick={()=>navigate(`/appointment/${item._id} `)} className='border rounded-md w-60 md:hover:scale-105  '>
                <img className='bg-blue-100' src={item.image} alt="" />
                <div className='flex flex-col text-sm  pt-2.5 pl-3.5 pb-5 '>
                    <div className=''>
                        <p className='text-green-500 '>Available</p>
                        </div>
                    <p className='text-sm md:text-xl font-semibold pt-1'>{item.name}</p>
                    <p className='text-sm pt-1'>{item.speciality}</p>
                </div>
                
            </div>
            
        ))
          }
        </div>
      </div>

    </div>
  )
}

export default Doctors
