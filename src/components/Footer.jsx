import React from 'react'

function Footer() {
  return (
    <div className='w-full mt-0  md:px-12 lg:px-20 bg-blue-500 text-white'>
        <hr className='w-full bg-gray-800 h-[2px]'></hr>
        <div className='w-full items-center flex-row text-xs md:text-[12px] py-4 justify-center flex'>
            <p>Made with Love<span>❤🚀</span></p>
            <p>By © <a href='https://github.com/Muchael123' target="_blank" className='text-gray-300'>Maich</a></p>
        </div>
    </div>
  )
}

export default Footer