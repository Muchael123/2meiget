import React, { useState } from 'react'
import Popup from './Popup'

function Hero() {
    const [input, setInput] = useState(0);

  return (
    <div className='flex flex-col md:flex-row justify-between w-full px-4 md:px-14 lg:px-20 mt-5'>
        <div className='md:text-6xl text-2xl font-semibold  md:max-w-[50%]'>
            <p className='text-green-500 font-thin'><span className='text-blue-500 font-semibold'>Helping students find their</span> Lost ID Cards</p>
            <p className='md:text-base mt-4 text-xs font-light'>If we have your details we'll send you an SMS with the details of where to pick up your lost ID Card incase you lost it and it once found</p>
            <Popup/>
        </div>
        <div className='flex flex-col items-center justify-center pt-6 p-2'>
            <div>
                <p className='font-semibold mt-6'>You can also search for your lost Id Here:</p>
                <form className='flex flex-col p-2 lg:flex-row shadow-md shadow-slate-500/10 rounded-md lg:divide-x'>
                <input onChange={(e) => setInput(e.target.value)}
                 className='w-full flex-1 p-4 outline-none rounded-md mb-4' placeholder='Enter your ID or Reg No number' />
               <button type='submit' disabled={input >= 999999} className={`rounded-md p-4 ${input > 999999 ? 'cursor-pointer bg-blue-500 text-white' : 'cursor-not-allowed text-gray-500 bg-gray-200'}`}>Search</button>

                </form>
            </div>
        </div>
        </div>
  )
}

export default Hero