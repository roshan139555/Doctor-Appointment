import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'

const MyProfile = () => {
  const[userData, setUserData] = useState({
    name: "Edward Vincent",
    image:assets.profile_pic,
    email:"richardjames@gmail.com",
    phone:"+199999999",
    address:{
      line1:"57th cross, richmond",
      line2:"Circle, Church Road , London"
    },
    gender:"Male",
    dob:"2000-01-20"
  })

  const[isEdit, setIsEdit] = useState(true)
  return (
    <div>
      
      <img src={userData.image} alt="" />
      {
        isEdit ? <input type="text" value={userData.name} onChange={e => setUserData(prev =>({...prev,name:e.target.value}))}/> : <p>{userData.name}</p>
      }
      <hr />

      <div>
        <p>CONTACTs INFORMATION</p>
        <div>
          <p>Email id:</p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {
            isEdit
              ? <input type="text" value={userData.phone} onChange={e => setUserData(prev =>({...prev, name:e.target.value}))} />
              : <p>{userData.phone}</p>
          }
          <p>Address:</p>
          {
            isEdit ? <p>
              <input onChange={(e)=>setUserData(prev =>({...prev,address: {...prev.address,line1: e.target.value}}))} value={userData.address.line1} type="text" />
              <br />
              <input  onChange={(e)=>setUserData(prev =>({...prev,address: {...prev.address,line2: e.target.value}}))} value={userData.address.line2} type="text" />
            </p>
            :<p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          }
        </div>
      </div>
      <div>
        <p>BASIC INFORMATION</p>
        <div>
          <p>GENDER:</p>
          {
            isEdit ? <select onChange={(e)=>setUserData(prev=>({...prev,gender: e.target.value}))} value={userData.gender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            : <p>
              {userData.gender}
            </p>
          }
          <p>Birthday:</p>
          {
            isEdit ? <input type='date' onChange={(e)=>setUserData(prev=>({...prev,dob: e.target.value}))} value={userData.dob}/>
            : <p>{userData.dob}</p>
          }
        </div>
      </div>

      <div>
        {
          isEdit ?
          <button onClick={()=> setIsEdit(false)} >Save Information</button>
          :
          <button onClick={()=> setIsEdit(true)}>Edit</button>
        }
      </div>

    </div>
  )
}

export default MyProfile
