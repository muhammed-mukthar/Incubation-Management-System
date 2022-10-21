import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import Track from '../components/Admin/Track'

function AdminTrack() {
  let navigate=useNavigate()
  useEffect(()=>{
  let token=  localStorage.getItem('admintoken');
  console.log(token,'sffsf');
  if(!token){
    navigate('/admin')

  }

  },[])
  return (
    <div><Track/></div>
  )
}

export default AdminTrack