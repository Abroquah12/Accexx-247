import React from 'react'
import Image from 'next/image'
import photo10 from '../public/Images/photo10.webp'

const Hero8 = () => {
  return (
    <div className='mt-20 ml-20 flex justify-between items-center p-6'>
        <div className='bg-white w-[1150px] h-120 shadow-2xl rounded-2xl flex justify-center items-center gap-14'>
            <div>
                <Image
                src={photo10}
                alt='a picture'
                width={500}
                height={500}
                className='h-100 rounded-2xl object-cover'/>

            </div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='font-semibold text-4xl text-gray-800 mb-4'>Subscribe our Newsletter</h1>
                <p className='text-gray-600'>Be the first to discover new product features, upcoming events, <br />
                and special promotions tailored specifically for our valued <br />
                 subscribers.</p>
                 <div className='flex gap-2 mt-4'>
                     <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 rounded-lg border w-85 border-gray-200 focus:outline-none focus:border-[#9871FF]"/>
                    <button className='text-white bg-[#9871FF] rounded p-2 w-25 '>Subscribe</button>
                 </div>

            </div>

        </div>
    </div>
  )
}

export default Hero8