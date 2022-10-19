import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import loginImg from '../assets/table.jpg'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {userUrl} from '../constants/constant'
function Login() {

  const [email,SetEmail]=useState('')
  const [password,SetPassword]=useState('')
  const [error, setError] = useState('')
const navigate=useNavigate()
  const details={
    email,
    password
  }
  

  const formsubmit=(e)=>{
  e.preventDefault()
  if (!email || !password) {
      setError('Enter All Details')
  } else {
      axios.post(`${userUrl}/api/auth/login`, details).then((response) => {
          // console.log('login successs');
          console.log(response);
          localStorage.setItem("userToken", JSON.stringify(response.data.accessToken))
          localStorage.setItem("user", JSON.stringify(response.data))

          navigate('/home')
      }).catch((error) => {
          console.log(error);
          if (error.response.data.err) {
              setError(error.response.data.err)
          }
      })
  }
}
useEffect(() => {
  const token = localStorage.getItem('userToken')
  if (token) {
      navigate('/home')
  } else {
      navigate('/')
  }
}, [])


  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img src={loginImg}  className='w-full h-full object-cover ' alt="" />
      </div>
   {error &&   <h1 className='text-red-600'>{error}</h1>}
      <div className='bg-gray-100 flex flex-col justify-center'>
        <form  onSubmit={formsubmit} className='max-w-[400px] w-full mx-auto bg-white p-4'>
          <h2 className='text-4xl font-bold text-center py-6'>Login</h2>
          <div className='flex flex-col py-2'>
            <label>Username</label>
            <input className='border p-2' onChange={(e)=>{
              SetEmail(e.target.value)
            }} type="text" />
          </div>
          <div className='flex flex-col py-2'>
            <label>Password</label>
            <input className='border p-2'  onChange={(e) => {
                    SetPassword(e.target.value);
                  }} type="password" />
          </div>
          <button className='border w-full my-5 py-2  bg-indigo-600 hover:bg-indigo-500 text-white'>Sign In</button>
         <div className='flex justify-center'>
          <p>Create an account</p>
         </div>
        </form>
      </div>
    </div>
  )
}

export default Login