import React from 'react'
import Image from 'next/image';
import photo4 from '../public/images/photo4.webp';

const Why = () => {
  return (
    <div>
        <div className='flex flex-col gap-4 ml-20 mt-150'>
            <h1 className='text-[#9871FF]'>WHY CHOOSE US</h1>
            <p className='text-5xl font-bold'>We provide the health services <br />for patients. You can consult with our</p>
            <p className='text-[#9871FF] text-5xl font-bold'>professional doctors by making an <br />appointment consult.</p>
        </div>

        <div className='flex justify-evenly items-center mt-20'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-[#9871FF]'>OUR DOCTORS</h1>
                <h1 className='font-bold text-3xl'>Consultation with our <br /> professional doctors</h1>
                <p className='text-gray-600'>Not to worry, our professional doctors are experienced in treating and serving the <br />
                 needs of patients. We have doctors from various specialties, so that our patients <br />
                 will be facilitated in curing all diseases.</p>
                 <div className='flex justify-between items-center mt-10'>
                      <div>
                    <h1 className='text-[#9871FF] font-bold text-3xl'>+10 yrs</h1>
                    <p className='text-gray-600'>Most of our doctors have 10+ <br />
                     years of experience serving <br />
                      patients</p>
                 </div>
                 <div>
                    <h1 className='text-[#9871FF] font-bold text-3xl' >+230K</h1>
                    <p className='text-gray-600'>They have been serving <br /> 
                    patients both online and <br />
                     offline</p>

                 </div>
                 </div>
               
            </div>
            <div>
            <Image
            src={photo4}
            alt='a picture of a doctor'
            width={500}
            height={500}
            className=' rounded-3xl'/>
            </div>
        </div>


    </div>
  )
}

export default Why