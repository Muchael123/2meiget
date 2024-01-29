import React from 'react'
import Popup from './Popup'

function Hero() {
  return (
    <div className='flex flex-col md:flex-row justify-between w-full px-4 md:px-14 lg:px-20 mt-5'>
        <div className='md:text-6xl text-2xl font-semibold  md:max-w-[50%]'>
            <p className='text-green-500 font-thin'><span className='text-blue-500 font-semibold'>Helping students find their</span> Lost ID Cards</p>
            <p className='md:text-base mt-4 text-xs font-light'>If we have your details we'll send you an SMS with the details of where to pick up your lost ID Card</p>
            <Popup/>
        </div>
        <div className='flex flex-col items-center justify-center pt-6 p-2'>
            <img className=' hidden md:block w-full min-w-[40vw] rounded-lg ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZM37GHkGbgGK_SXzEOa20kvTOKKHCBUhs-Zt7pUlukQ&s" alt="" />
            <p>You can also search for your lost Id</p>
        </div>
        </div>
  )
}

export default Hero