import React from 'react'
import loginImg from '../assets/table.jpg'
function Login() {

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img src={loginImg}  className='w-full h-full object-cover ' alt="" />
      </div>
      <div className='bg-gray-100 flex flex-col justify-center'>
        <form  className='max-w-[400px] w-full mx-auto bg-white p-4'>
          <h2 className='text-4xl font-bold text-center py-6'>Login</h2>
          <div className='flex flex-col py-2'>
            <label>Username</label>
            <input className='border p-2' type="text" />
          </div>
          <div className='flex flex-col py-2'>
            <label>Password</label>
            <input className='border p-2' type="password" />
          </div>
          <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Sign In</button>
         <div className='flex justify-center'>
          <p>Create an account</p>
         </div>
        </form>
      </div>
    </div>
  )
}

export default Login