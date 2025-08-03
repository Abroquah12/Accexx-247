import React from 'react'
import Image from 'next/image';
import premium_photo1 from '../public/images/premium_photo1.webp';
import premium_photo5 from '../public/images/premium_photo5.webp';
import photo3 from '../public/images/photo3.webp';

const hero5 = () => {
  return (
    <div className='container  text-black  max-w-7xl p-5 '>
        <div className='flex justify-between items-center'>
            <h1 className='font-bold text-3xl ml-30'>We Will Serve You With <br />Healthcare Services</h1>
            <div className='flex flex-col'>
                <p>We provide a variety of services that can make it easier for you to </p>
                <p className='ml-86'>fulfill your needs.</p>
                <button className='bg-[#9871ff] text-white w-30 h-8 rounded-2xl ml-86'>Learn More</button>
            </div>
        </div>

        <div className='flex justify-evely items-center mt-20 gap-10 absolute left-10 '>
            <div className='bg-gray-100 w-100 h-115 rounded-2xl flex flex-col gap-5 '>
                <h1 className='font-bold text-2xl ml-5 mt-7'>Make <br />Appointment</h1>
                <p className='ml-5'>We make it easy for you to make an <br />appointment with the doctor of your choice.</p>
                <Image
                src={premium_photo1}
                alt='a picture of a doctor'
                width={500}
                height={500}
                className='w-90 rounded-2xl ml-5'/>
            </div>
            <div className='bg-[#9871ff] w-100 h-115 rounded-2xl text-white flex flex-col gap-5  '>
                 <h1 className='font-bold text-2xl ml-5 mt-7'>Virtual <br />Consultation</h1>
                <p className='ml-5'>You don't have to bother because we provide<br />a helpful facility to consult online.</p>
                <Image
                src={photo3}
                alt='a picture of a doctor'
                width={500}
                height={500}
                className='w-90 rounded-2xl ml-5'/>
            </div>
            <div className='bg-gray-100 w-100 h-115 rounded-2xl flex flex-col gap-5  '>
                 <h1 className='font-bold text-2xl ml-5 mt-7'>Doctor <br />Prescription</h1>
                <p className='ml-5'>We can also provide you with prescription<br />medicine after your online consultation.</p>
                <Image
                src={premium_photo5}
                alt=''
                width={500}
                height={500}
                className='w-90 rounded-2xl ml-5'/>
            </div>
        </div>
    

    </div>
  )
}

export default hero5