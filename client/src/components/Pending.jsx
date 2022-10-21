import React, { useContext, useEffect, useState } from 'react'
import Axios from 'axios'
import { UserContext } from '../context/UserContext'
import {userUrl,userRequest} from '../constants/constant'
import NAV from './nav'
function Pending() {
  const { userDetails, setUserDetails } = useContext(UserContext)
  const [form,setForm]=useState(null)
  const [token, setToken] = useState('')

  useEffect(()=>{

    setToken(localStorage.getItem('userToken'))
    

    Axios.get(`${userUrl}/api/users/status/${userDetails._id}`,{ headers: {"token" : `Bearer ${token}`}}).then((response) => {
      if (response.data) {
        console.log(response.data);
        setForm(response.data)
      } else {
        console.log(response)
      }
    }).catch((err) => {
      console.log(err);
    })
  },[])

    return (
      <div>
        <NAV/>
        <div className='flex flex-col text-white h-screen bg-blue-800 justify-center items-center'>
          <h1 className='text-3xl text-amber-400 font-bold'>Application Submitted</h1>
          <h3 className='text-xl'>Your application for Incubation is under process</h3>
          {form?.isBooked? <p>status : <span className='text-green-400 text-xl font-bold'>Approved</span> </p>:
          (form?.isApproved? <p>status : <span className='text-orange-400 text-xl font-bold'>Under process</span> </p> : <p>status : <span className='text-orange-700 text-xl font-bold	'> Pending....</span> </p>)}
        </div>
        </div>
      )
}

export default Pending