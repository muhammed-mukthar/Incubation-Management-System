import React from 'react'

function NavAdmin() {
  return (
    <div class='flex justify-end'>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-800 shadow s w-full">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://flowbite.com/" class="flex items-center">
            
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Admin</span>
        </a>
   
        <button className='text-white text-xl hover:text-yellow-500 pr-6 '>Logout</button>
      
      </div>
    </nav>
    </div>
  )
}

export default NavAdmin