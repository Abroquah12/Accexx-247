import React from 'react'

const Hero2 = () => {
  return (
    <div className='bg-white rounded-2xl shadow-md p-5 flex flex-col space-y-6 relative bottom-20 right-20 z-10 w-[1050px] h-[160px] mx-auto mt-10 overflow-hidden'>
        <h1 className="text-3xl font-bold text-gray-800"><u>General</u></h1>
        <div className='flex gap-4'>
            <div className='border border-gray-400 w-65 h-[58px]  px-6 py-2 rounded-2xl overflow-hidden'>
                <h1 className='text-gray-400'>Location</h1>
                <p className='ml-3 '>London, England</p>
            </div>
            <div className='border border-gray-400 w-65 h-[58px] px-6 py-2 rounded-2xl overflow-hidden'>
                <h1 className='text-gray-400'>Appointment date</h1>
                <p>4th March 2025</p>
            </div>
            <div className='border border-gray-400  w-65 h-[58px] px-6 py-2 rounded-2xl overflow-hidden'>
                <h1 className='text-gray-400'>Who</h1>
                <p>1 Adult</p>
            </div>
            <div>
                <button className='bg-purple-600  rounded-2xl text-white px-6 h-[58px] py-3 w-60'>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Hero2