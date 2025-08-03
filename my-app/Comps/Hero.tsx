import React from 'react'
import Image from 'next/image';
import premium_photo from '../public/Images/premium_photo.webp'; 

const Hero = () => {
  return (
    <div className='flex md:flex-row flex-col items-center h-[60vh] justify-evenly space-y-8 mt-15'>
        <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-medium lg:leading-[70px] sm:leading-loose text-[#1a1a1a]">
                Find your doctor and <br />make an appointment</h1>
                <p>Select preferred doctor and time slot to book an <br /> appointment or consultation</p>
        </div>
        <div>
            <Image
            src={premium_photo}
            alt='a pic'
            height={1200}
            width={800}
            className='w-[500px] h-[500px] rounded-3xl object-cover mt-50'/>

        </div>
    </div>
  )
}

export default Hero