import React from 'react'
import {Link} from 'react-router-dom'


function Userhome() {
  return (
    <div className='flex flex-col text-white h-screen justify-center items-center'>
      <h1 className='text-3xl text-purple-600 font-bold'>Hey Welcome</h1>
      <h3 className='text-xl'>we are delighted to have you here</h3>
      <Link to={'/'} className='bg-blue-900 px-10 py-2 mt-3 rounded-md font-bold'>Login to continue</Link>
    </div>
  )
}

export default Userhome