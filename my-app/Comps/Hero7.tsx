import React from 'react'
import Image from 'next/image'
import photo9 from '../public/Images/photo9.webp'
import tick from '../public/Images/tick.svg'

const Hero7 = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
        <h1 className='text-4xl font-bold '>Create natural lofe after treate <br />from mental health medicare</h1>
        <p className='text-gray-600'>Medicare patient care is paramount - the driving force in everything we do. LifeStance is commited</p>
        <p className='text-gray-600'>to state-of-the-art clinical excellence</p>

        <div className='flex mt-20 gap-20'>
            <div className='flex flex-col gap-10'>
                <h1 className='font-bold'>Primary Instruction</h1>
                <p className='text-gray-600'>The primary care mental health workers provide one-to-one support to people within <br />
                 GP practices, helping with discharge from secondary care, liaising between services <br />
                  and providing ongoing mental health support.</p>

                  <p className='text-gray-600'>Listen with curiosity and empathize with them. It may be helpful to tell your child <br />
                   about other people who experience similar problems. If you or someone else your <br />
                    child trusts have mental health conditions, explain that the same way you would tell <br />
                     them about diabetes.</p>
                     <div className='flex justify-between items-center text-gray-600'>
                        <div className='flex flex-col gap-5'>
                            <div className='flex gap-2'>
                                <Image
                                src={tick}
                                alt='tick logo'
                                width={100}
                                height={100}
                                className='w-5'
                                />
                                <p>Complete Daily Task</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image
                                src={tick}
                                alt='tick logo'
                                width={100}
                                height={100}
                                className='w-5'
                                />
                                <p>Healthy Food</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image
                                src={tick}
                                alt='tick logo'
                                width={100}
                                height={100}
                                className='w-5'
                                />
                                <p>Daily Morning Walk</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image
                                src={tick}
                                alt='tick logo'
                                width={100}
                                height={100}
                                className='w-5'
                                />
                                <p>Family Time</p>
                            </div>
                            <button className='rounded w-25 p-2 text-white bg-[#9871FF] '>
                                Book Now
                            </button>
                          
                        </div>

                        <div className='flex flex-col gap-5 mr-10 mb-15'>
                            <div className='flex gap-2'>
                                <Image
                                src={tick}
                                alt='tick logo'
                                width={100}
                                height={100}
                                className='w-5'
                                />
                                <p>Care of Time Management</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image
                                src={tick}
                                alt='tick logo'
                                width={100}
                                height={100}
                                className='w-5'
                                />
                                <p>Proper Sound Sleep</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image
                                src={tick}
                                alt='tick logo'
                                width={100}
                                height={100}
                                className='w-5'
                                />
                                <p>Drinking Water</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image
                                src={tick}
                                alt='tick logo'
                                width={100}
                                height={100}
                                className='w-5'
                                />
                                <p>Gym Workout</p>
                            </div>
                        </div>
                     </div>
            </div>
            <div>
                <Image
                src={photo9}
                alt="a picture"
                width={500}
                height={500}
                className="rounded-2xl h-150"
                
                
                />
            </div>
        </div>

    </div>
  )
}

export default Hero7