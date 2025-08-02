import React from 'react'
import Image from 'next/image'
import locationpin from '../public/images/locationpin.svg'
import accountuser from '../public/images/accountuser.svg'
import caluser from '../public/images/caluser.svg'
import sbtn from '../public/images/sbtn.svg'


const Hero2 = () => {
  return (
    <div className='bg-white rounded-2xl shadow-2xl p-5 flex flex-col space-y-6 relative bottom-20 right-20 z-10 w-[1050px] h-[160px] mx-auto mt-10 overflow-hidden'>
        <h1 className="text-1xl font-bold text-purple-600"><u className=''>General</u></h1>
        <div className='flex gap-4'>
            <div className='flex border border-gray-200 w-65 h-[58px]  px-6 py-2 rounded-2xl overflow-hidden'>
                <Image
                    src={locationpin}
                    alt="Hero Image"
                    width={30}
                    height={30}
                    className='inline-block mr-2'
                    />
                    <div className='flex flex-col'>
                        <h1 className='text-gray-400'>Location</h1>
                        <p className="text-gray-600">London, England</p>
                    </div>
               
            </div>
            <div className=' flex border border-gray-200 w-65 h-[58px] px-6 py-2 rounded-2xl overflow-hidden'>
                <Image
                src={caluser}
                alt="Hero Image"
                width={30}
                height={30}
                className='inline-block mr-2'
                />
                <div className='flex flex-col'>
                      <h1 className='text-gray-400'>Appointment date</h1>
                        <p className="text-gray-600">4th March 2025</p>
                </div>
              
            </div>
            <div className='flex border border-gray-200  w-65 h-[58px] px-6 py-2 rounded-2xl overflow-hidden'>
                  <Image
                src={accountuser}
                alt="Hero Image"
                width={30}
                height={30}
                className='inline-block mr-2 text-purple-600'
                />
                <div className='flex flex-col'>
                       <h1 className='text-gray-400'>Who</h1>
                        <p className="text-gray-600">1 Adult</p>
                </div>
             
            </div>
            <div>
                <button className='bg-purple-600  rounded-2xl text-white px-6 h-[58px] py-3 w-40'>
                    <Image
                    src={sbtn}
                    alt="Search Button"
                    width={20}
                    height={20}
                    className='inline-block mr-2'
                    
                    />
                    Search</button>
            </div>
        </div>
    </div>
  )
}

export default Hero2