import React,{useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import { UserContext } from '../context/UserContext'

function NAV() {
  const {userDetails,setUserDetails,removeCookie}=useContext(UserContext)
  const navigate=useNavigate()

  const handleLogout=()=>{
    localStorage.removeItem('user')
    localStorage.removeItem('userToken')
    setUserDetails(null); 
    removeCookie("jwt");
    navigate('/');
  }

  return (
    <nav className='bg-gray-800 text-white text-xl p-4 '  >
        <ul className='flex justify-end '>
            <button className=' hover:text-yellow-200 ' onClick={handleLogout}>Logout</button>
          
        </ul>
        
    </nav>
  )
}

export default NAV