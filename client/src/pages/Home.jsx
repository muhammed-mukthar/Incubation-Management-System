import React from 'react'
import { useContext } from 'react'
import Form from '../components/Form'
import Pending from '../components/Pending'
import Userhome from '../components/Userhome'

import {UserContext} from '../context/UserContext'


function Home() {
    
    const {userDetails}=useContext(UserContext)
  return (
    <>
        {userDetails? userDetails.isRegistered ? <Pending/> :<Form/> : <Userhome/>} 
    </>
  )
}

export default Home