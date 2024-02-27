import React, { useEffect, useState } from 'react'

function Header() {
  const count = useState();
  useEffect(() => {
    
  })
  return (
    <div className="w-full bg-[#E0EBFD]  sticky top-0 shadow-lg flex flex-row justify-between items-center px-4 md:px-14 lg:px-20">
        {/* Left */}
            
            <div className='md:ml-3 flex items-center  justify-center'>
              <img src='/tumeiget.png' className='h-24 flex items-center justify-center' />
             
            </div>
  
        {/* Right */}
        <div className='flex text-xs md:text-base divide-x'>
            <a href="https://my-portfolio-sepia-six.vercel.app/" className='px-2 font-light tetx-right hover:text-blue-500 transition-all duration-300 ease-in-out'>See Our Portfolio</a>
            <a href="https://github.com/Muchael123" className='font-light px-2 hover:text-blue-500 transition-all duration-300 ease-in-out'>Our Github Repo</a>
        </div>
    </div>
  )
}

export default Header