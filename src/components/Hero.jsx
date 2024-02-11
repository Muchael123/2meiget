import React, { useState } from 'react'
import Popup from './Popup'
import { FaPagelines } from "react-icons/fa";

function Hero() {
    const [input, setInput] = useState(0);

  return (
    <div className='flex flex-col md:flex-row justify-evenly items-start  w-full px-4 md:px-14 lg:px-20 mt-5'>
        <div className='md:text-6xl text-2xl font-semibold  md:max-w-[50%]'>
          <FaPagelines/>
            <p className='text-green-500 font-semibold'><span className='text-blue-500 font-semibold'>Helping students find their</span> Lost ID Cards</p>
            <hr className='bg-blue-500 mt-2 h-1'/>
            <p className=' mt-4 text-sm md:text-[1.5rem] font-light'>Exciting update! Our app is geared up to shoot you a notification via SMS as soon as we locate your lost ID. Get ready for the ultimate scoop on where to retrieve it! 🌟 Stay tuned to your phone—we're on a mission to reunite you with your card, pronto!</p>
            <div className='w-full flex flex-row justify-between'><FaPagelines/>
            <FaPagelines/></div>
            <p className='underline text-blue-500 mb-3 text-center'>Our stats</p>
            <div className='flex flex-row justify-evenly'>
            <div>
                <p>4000</p>
                <p className='text-sm font-semibold text-center'>Lost and found ID's</p>
              </div>
              <div>
                <p>4000</p>
                <p className='text-sm  text-center font-semibold'>Lost and found ID's</p>
              </div>
            </div>
            
        </div>
        <div className='flex flex-col items-center justify-center pt-6 p-2'>
            <div>
                <p className='font-semibold mt-6'>You too can also search for your lost Id Here:</p>
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