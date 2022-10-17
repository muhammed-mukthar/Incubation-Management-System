import React from 'react'

function NAV() {
  return (
    <nav className='bg-gray-800 text-white text-xl p-4 '  >
        <ul className='flex justify-end '>
            <button className=' hover:text-yellow-200'>Logout</button>
          
        </ul>
        
    </nav>
  )
}

export default NAV