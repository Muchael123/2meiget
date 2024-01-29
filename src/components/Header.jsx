import React from 'react'

function Header() {
  return (
    <div className='w-full bg-white shadow-lg flex flex-row justify-between items-center'>
        {/* Left */}
        <div className='flex flex-row'>
            <img src='https://elearning.mmust.ac.ke/pluginfile.php/1/theme_synergybase/logo/1694589402/logo.png' className='px-4 h-20 w-auto' alt='Logo' />
            <div >
                <h1 className='font-bold text-2xl font-MyBrush text-green-600'>2MEI<span className='text-blue-500 text-5xl font-MyHeader'>GET</span></h1>
                <p className='text-gray-400 text-sm'>We'll notify you when we find it</p>
            </div>
        </div>
        {/* Right */}
        <div className='flex text-xs md:text-base divide-x'>
            <a href="https://my-portfolio-sepia-six.vercel.app/" className='px-2 font-light tetx-right'>See Our Portfolio</a>
            <a href="https://github.com/Muchael123" className='font-light px-2'>My Github Repo</a>
        </div>
        
    </div>
  )
}

export default Header