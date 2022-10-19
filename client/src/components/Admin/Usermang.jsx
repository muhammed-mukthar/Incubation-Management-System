import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import NavAdmin from './NavAdmin'
import {userUrl} from '../../constants/constant'
import { useState } from 'react'

function Usermang() {

    const [users,Setusers]=useState([])
    const [errors,SetError]=useState('')
    useEffect(()=>{
        
axios.get(`${userUrl}/api/users/getusers`).then(({data})=>{

    console.log(data.users);
    if(data.users){
        Setusers(data.users)
    }else{
        SetError('something is wrong')
    }
})
    },[])
    console.log(users,'sfd');
  return (
    <div>
        <NavAdmin/>
        <div className='flex flex-col relative text-white h-screen bg-blue-800 justify-center items-center'>
            <h1 className='text-3xl text-center mb-9 '>Users</h1>
<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    User name
                </th>
                <th scope="col" className="py-3 px-6">
                   Company
                </th>
                <th scope="col" className="py-3 px-6">
                    Email
                </th>
                <th scope="col" className="py-3 px-6">
                   Action
                </th>
              
            </tr>
        </thead>
        <tbody>
            
   
       
    {users &&
     users.map((user,index)=>{
        console.log(user.name);
    <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
<p>{user.email}</p>
        <td className="py-4 px-6">
           fsfd
        </td><td className="py-4 px-6">
            sdfs
        </td>
        <td className="py-4 px-6">
            fsdfsd
        </td>
        
        <td className="py-4 px-6 text-right">
            <button className="font-medium p-4 text-blue-600 bg-green-700 dark:text-blue-500 hover:underline">Edit</button>
        </td>
    </tr>
})}
  
         
        </tbody>
    </table>
</div>

            </div>
    </div>
  )
}

export default Usermang