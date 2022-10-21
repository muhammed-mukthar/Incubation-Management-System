import React from 'react'
import {Link,useNavigate} from 'react-router-dom';
function NavAdmin() {
 const navigate=useNavigate()
  function handlelogout(){
    localStorage.removeItem('admintoken')
 
    navigate('/admin');
  }
  return (
    <div>
    <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-blue-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
     
      <div class="flex md:order-2 ">
          <button type="button" onClick={handlelogout} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
       
      </div>
      <div class=" justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex  p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
         
         <li>
         <Link to='/admin/dashboard'> <p  class="cursor-pointer block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">dashboard</p></Link>  
          </li>
          <li>
           <Link to='/admin/userblock'> <p  class="cursor-pointer block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">userManagement</p></Link>
          </li>
          <li>
          <Link to='/admin/booking'>  <p  class="cursor-pointer block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Booking</p></Link>
          </li>
          <li>
          <Link to='/admin/track'> <p  class="cursor-pointer block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"> Track</p></Link> 
          </li>
        </ul>
      </div>
      </div>
    </nav>
    </div>
  )
}

export default NavAdmin