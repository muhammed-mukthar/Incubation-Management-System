import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import Dashboard from '../components/Admin/Dashboard'

function AdminDash() {
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
        <Dashboard/>
        </div>
  )
}

export default AdminDash