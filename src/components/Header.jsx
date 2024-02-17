import React, { useEffect, useState } from 'react'


function Header() {
  const count = useState();
  useEffect(() => {
    
  })
  return (
    <div className="w-full bg-[#E0EBFD] sticky top-0 shadow-lg flex flex-row justify-between items-center px-4 md:px-14 lg:px-20">
        {/* Left */}
        <div className='flex flex-row'>
            
            <div className='md:ml-3'>
                <h1 className='font-bold md:text-2xl text-xl font-MyBrush text-green-600'>2MEI<span className='text-blue-500 md:text-5xl text-3xl font-MyHeader'>GET</span></h1>
                <p className='text-gray-400 text-sm'>We'll notify you when we find it</p>
            </div>
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