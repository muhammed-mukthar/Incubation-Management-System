import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import Booking from '../components/Admin/Booking'


function AdminBooking() {
let navigate=useNavigate()
  useEffect(()=>{
  let token=  localStorage.getItem('admintoken');
  console.log(token,'sffsf');
  if(!token){
    navigate('/admin')

  }

  },[])
  return (
    <div>
        <Booking/>
    </div>
  )
}

export default AdminBooking