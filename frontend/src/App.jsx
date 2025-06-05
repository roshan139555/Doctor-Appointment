import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Doctors from './pages/Doctors'
import Contact from './pages/Contact'
import MyAppointments from './pages/MyAppointments'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
          <Route path='/doctors/:speciality' element={<Doctors/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/My-Appointment' element={<MyAppointments/>}/>
          <Route path='/My-Profile' element={<MyProfile/>}/>
          <Route path='/appointment' element={<Appointment/>}/>
        </Routes>
    </div>
  )
}

export default App
