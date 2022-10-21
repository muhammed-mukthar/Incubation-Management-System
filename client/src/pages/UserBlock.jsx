import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import Usermang from '../components/Admin/Usermang'

function UserBlock() {
  let navigate=useNavigate()
  useEffect(()=>{
  let token=  localStorage.getItem('admintoken');
  console.log(token,'sffsf');
  if(!token){
    navigate('/admin')

  }

  },[])
  return (
    <div><Usermang/></div>
  )
}

export default UserBlock