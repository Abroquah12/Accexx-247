'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import premium_photo from '../public/Images/premium_photo.webp'
import premium_photo1 from '../public/Images/premium_photo1.webp'
import premium_photo5 from '../public/Images/premium_photo5.webp'
import photo3 from '../public/Images/photo3.webp'
import photo4 from '../public/Images/photo4.webp'
import photo5 from '../public/Images/photo5.webp'
import photo6 from '../public/Images/photo6.webp'
import photo7 from '../public/Images/photo7.webp'
import photo8 from '../public/Images/photo8.webp'
import photo9 from '../public/Images/photo9.webp'
import photo10 from '../public/Images/photo10.webp'
import tick from '../public/Images/tick.svg'
import locationpin from '../public/Images/locationpin.svg'
import accountuser from '../public/Images/accountuser.svg'
import caluser from '../public/Images/caluser.svg'
import sbtn from '../public/Images/sbtn.svg'
import accountuser2 from '../public/Images/accountuser2.svg'
import caluser2 from '../public/Images/caluser2.svg'
import locationpin2 from '../public/Images/locationpin2.svg'
import bulb from '../public/Images/bulb.svg'

gsap.registerPlugin(ScrollTrigger)

/* ------------------------------ Hero ------------------------------ */
const Hero = () => {
  return (
    <div data-gsap-reveal className='flex md:flex-row flex-col items-center h-[60vh] justify-evenly space-y-8 mt-15'>
      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-medium lg:leading-[70px] sm:leading-loose text-[#1a1a1a]">
          Find your doctor and <br />make an appointment
        </h1>
        <p>Select preferred doctor and time slot to book an <br /> appointment or consultation</p>
      </div>
      <div>
        <Image
          src={premium_photo}
          alt='a pic'
          height={1200}
          width={800}
          className='w-[500px] h-[500px] rounded-3xl object-cover mt-50'
        />
      </div>
    </div>
  )
}

/* ------------------------------ Hero2 (search bar) ------------------------------ */
const Hero2 = () => {
  return (
    <div data-gsap-reveal className='bg-white rounded-2xl shadow-2xl p-5 flex flex-col space-y-6 relative bottom-20 right-20 z-10 w-[1050px] h-[160px] mx-auto mt-10 overflow-hidden'>
      <h1 className="text-1xl font-bold text-purple-600"><u>General</u></h1>
      <div className='flex gap-4'>
        <div className='flex border border-gray-200 w-65 h-[58px] px-6 py-2 rounded-2xl overflow-hidden'>
          <Image src={locationpin} alt="Location" width={30} height={30} className='inline-block mr-2' />
          <div className='flex flex-col'>
            <h1 className='text-gray-400'>Location</h1>
            <p className="text-gray-600">London, England</p>
          </div>
        </div>
        <div className='flex border border-gray-200 w-65 h-[58px] px-6 py-2 rounded-2xl overflow-hidden'>
          <Image src={caluser} alt="Appointment date" width={30} height={30} className='inline-block mr-2' />
          <div className='flex flex-col'>
            <h1 className='text-gray-400'>Appointment date</h1>
            <p className="text-gray-600">4th March 2025</p>
          </div>
        </div>
        <div className='flex border border-gray-200 w-65 h-[58px] px-6 py-2 rounded-2xl overflow-hidden'>
          <Image src={accountuser} alt="Who" width={30} height={30} className='inline-block mr-2 text-purple-600' />
          <div className='flex flex-col'>
            <h1 className='text-gray-400'>Who</h1>
            <p className="text-gray-600">1 Adult</p>
          </div>
        </div>
        <div>
          <button className='bg-purple-600 rounded-2xl text-white px-6 h-[58px] py-3 w-40'>
            <Image src={sbtn} alt="Search Button" width={20} height={20} className='inline-block mr-2' />
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------ Hero3 (banner) ------------------------------ */
const Hero3 = () => {
  return (
    <div data-gsap-reveal className='container mx-auto mt-10 p-5 text-white bg-[#9871FF] rounded-2xl shadow-lg w-[1200px] h-[290px] overflow-hidden'>
      <div className='flex justify-evenly items-center mt-10'>
        <h1 className='font-bold text-2xl'>Easy Steps To Get Your <br />Solution</h1>
        <p>Easily make an appointment with our best doctor for your <br />families in the same day or next day</p>
        <button className='bg-white rounded-xl text-[#3b92f8] w-45 h-10'>Make an appointment</button>
      </div>
    </div>
  )
}

/* ------------------------------ Hero4 (steps) ------------------------------ */
const Hero4 = () => {
  return (
    <div data-gsap-reveal className="flex justify-evenly w-300 relative bottom-40 left-2 z-10 mx-auto mt-10">
      <div className="bg-white w-60 h-60 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-5">
        <Image src={accountuser2} alt="Search Doctor" width={30} height={30} className="inline-block mr-2" />
        <h1 className="font-bold">Search Doctor</h1>
        <div className="flex flex-col items-center justify-center">
          <p>Before book appointment </p>
          <p>first of all search doctor by </p>
          <p>category</p>
        </div>
      </div>
      <div className="bg-white w-60 h-60 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-5">
        <Image src={locationpin2} alt="Choose Your Location" width={30} height={30} className="inline-block mr-2" />
        <h1 className="font-bold">Choose Your Location</h1>
        <div className="flex flex-col items-center justify-center">
          <p>Then enter your location and </p>
          <p> we will help you find </p>
          <p> appointment near you</p>
        </div>
      </div>
      <div className="bg-white w-60 h-60 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-5">
        <Image src={caluser2} alt="Schedule Appointment" width={30} height={30} className="inline-block mr-2" />
        <h1 className="font-bold">
          Schedule <br />
          Appointment
        </h1>
        <div className="flex flex-col items-center justify-center">
          <p>Then select a date to set an </p>
          <p>appointment with your doctor</p>
        </div>
      </div>
      <div className="bg-white w-60 h-60 rounded-2xl shadow-xl flex flex-col items-center justify-center gap-5">
        <Image src={bulb} alt="Get Your Solution" width={30} height={30} className="inline-block mr-2" />
        <h1 className="font-bold">Get Your Solution</h1>
        <div className="flex flex-col items-center justify-center">
          <p>We will help you find and </p>
          <p> provide solutions for your </p>
          <p> health</p>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------ Hero5 (services) ------------------------------ */
const Hero5 = () => {
  return (
    <div data-gsap-reveal className='container text-black max-w-7xl p-5'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-3xl ml-30'>We Will Serve You With <br />Healthcare Services</h1>
        <div className='flex flex-col'>
          <p>We provide a variety of services that can make it easier for you to </p>
          <p className='ml-86'>fulfill your needs.</p>
          <button className='bg-[#9871ff] text-white w-30 h-8 rounded-2xl ml-86'>Learn More</button>
        </div>
      </div>

      <div className='flex justify-evenly items-center mt-20 gap-10 absolute left-10'>
        <div className='bg-gray-100 w-100 h-115 rounded-2xl flex flex-col gap-5'>
          <h1 className='font-bold text-2xl ml-5 mt-7'>Make <br />Appointment</h1>
          <p className='ml-5'>We make it easy for you to make an <br />appointment with the doctor of your choice.</p>
          <Image src={premium_photo1} alt='a picture of a doctor' width={500} height={500} className='w-90 rounded-2xl ml-5' />
        </div>
        <div className='bg-[#9871ff] w-100 h-115 rounded-2xl text-white flex flex-col gap-5'>
          <h1 className='font-bold text-2xl ml-5 mt-7'>Virtual <br />Consultation</h1>
          <p className='ml-5'>You don&apos;t have to bother because we provide<br />a helpful facility to consult online.</p>
          <Image src={photo3} alt='a picture of a doctor' width={500} height={500} className='w-90 rounded-2xl ml-5' />
        </div>
        <div className='bg-gray-100 w-100 h-115 rounded-2xl flex flex-col gap-5'>
          <h1 className='font-bold text-2xl ml-5 mt-7'>Doctor <br />Prescription</h1>
          <p className='ml-5'>We can also provide you with prescription<br />medicine after your online consultation.</p>
          <Image src={premium_photo5} alt='a picture of a prescription' width={500} height={500} className='w-90 rounded-2xl ml-5' />
        </div>
      </div>
    </div>
  )
}

/* ------------------------------ Why ------------------------------ */
const Why = () => {
  return (
    <div data-gsap-reveal>
      <div className='flex flex-col gap-4 ml-20 mt-150'>
        <h1 className='text-[#9871FF]'>WHY CHOOSE US</h1>
        <p className='text-5xl font-bold'>We provide the health services <br />for patients. You can consult with our</p>
        <p className='text-[#9871FF] text-5xl font-bold'>professional doctors by making an <br />appointment consult.</p>
      </div>

      <div className='flex justify-evenly items-center mt-20'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-[#9871FF]'>OUR DOCTORS</h1>
          <h1 className='font-bold text-3xl'>Consultation with our <br /> professional doctors</h1>
          <p className='text-gray-600'>
            Not to worry, our professional doctors are experienced in treating and serving the <br />
            needs of patients. We have doctors from various specialties, so that our patients <br />
            will be facilitated in curing all diseases.
          </p>
          <div className='flex justify-between items-center mt-10'>
            <div>
              <h1 className='text-[#9871FF] font-bold text-3xl'>+10 yrs</h1>
              <p className='text-gray-600'>
                Most of our doctors have 10+ <br />
                years of experience serving <br />
                patients
              </p>
            </div>
            <div>
              <h1 className='text-[#9871FF] font-bold text-3xl'>+230K</h1>
              <p className='text-gray-600'>
                They have been serving <br />
                patients both online and <br />
                offline
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image src={photo4} alt='a picture of a doctor' width={500} height={500} className='rounded-3xl' />
        </div>
      </div>
    </div>
  )
}

/* ------------------------------ Hero6 (topics) ------------------------------ */
const topics = [
  { img: photo5, title: 'Personality Disorders', text: 'Personality disorders are a group of mental illnesses.' },
  { img: photo6, title: 'Depression', text: 'Depression is a common and serious medical illness that negatively.' },
  { img: photo7, title: 'Anxiety', text: 'Anxiety is a feeling of fear, dread & uneasiness.' },
  { img: photo8, title: 'Mood Swings', text: 'Support for anxiety, depression, and more.' },
]

const Hero6 = () => {
  const rows = [topics.slice(0, 2), topics.slice(2, 4)]
  return (
    <div data-gsap-reveal className="bg-[#9871FF] flex flex-col justify-center items-center mt-10 py-12 px-24">
      <h1 className="text-white text-3xl md:text-4xl font-bold mt-10">
        Find providers who can <br />
        help with these topics
      </h1>
      {rows.map((row, i) => (
        <div
          key={i}
          className={`flex flex-col md:flex-row justify-center items-center gap-4 ${i === 0 ? 'mt-10' : 'mt-5'}`}
        >
          {row.map((t) => (
            <div key={t.title} className="bg-white p-4 rounded-lg shadow-lg flex gap-5 md:w-137 h-40">
              <div>
                <Image
                  src={t.img}
                  alt={`${t.title} topic`}
                  width={100}
                  height={100}
                  className="rounded-xl w-20 h-20 object-cover mt-4"
                />
              </div>
              <div className="flex flex-col p-2 gap-3">
                <h2 className="font-bold">{t.title}</h2>
                <p className="text-gray-600">{t.text}</p>
                <Link href="/services" className="text-gray-600 font-bold">
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

/* ------------------------------ Hero7 (primary instruction) ------------------------------ */
const checklistLeft = ['Complete Daily Task', 'Healthy Food', 'Daily Morning Walk', 'Family Time']
const checklistRight = ['Care of Time Management', 'Proper Sound Sleep', 'Drinking Water', 'Gym Workout']

const CheckItem = ({ label }: { label: string }) => (
  <div className='flex gap-2'>
    <Image src={tick} alt='tick logo' width={100} height={100} className='w-5' />
    <p>{label}</p>
  </div>
)

const Hero7 = () => {
  return (
    <div data-gsap-reveal className='flex flex-col justify-center items-center mt-10'>
      <h1 className='text-4xl font-bold'>Create natural life after treat <br />from mental health medicare</h1>
      <p className='text-gray-600'>Medicare patient care is paramount - the driving force in everything we do. LifeStance is committed</p>
      <p className='text-gray-600'>to state-of-the-art clinical excellence</p>

      <div className='flex mt-20 gap-20'>
        <div className='flex flex-col gap-10'>
          <h1 className='font-bold'>Primary Instruction</h1>
          <p className='text-gray-600'>
            The primary care mental health workers provide one-to-one support to people within <br />
            GP practices, helping with discharge from secondary care, liaising between services <br />
            and providing ongoing mental health support.
          </p>
          <p className='text-gray-600'>
            Listen with curiosity and empathize with them. It may be helpful to tell your child <br />
            about other people who experience similar problems. If you or someone else your <br />
            child trusts have mental health conditions, explain that the same way you would tell <br />
            them about diabetes.
          </p>
          <div className='flex justify-between items-center text-gray-600'>
            <div className='flex flex-col gap-5'>
              {checklistLeft.map((item) => (
                <CheckItem key={item} label={item} />
              ))}
              <button className='rounded w-25 p-2 text-white bg-[#9871FF]'>Book Now</button>
            </div>
            <div className='flex flex-col gap-5 mr-10 mb-15'>
              {checklistRight.map((item) => (
                <CheckItem key={item} label={item} />
              ))}
            </div>
          </div>
        </div>
        <div>
          <Image src={photo9} alt="a picture" width={500} height={500} className="rounded-2xl h-150" />
        </div>
      </div>
    </div>
  )
}

/* ------------------------------ Hero8 (newsletter) ------------------------------ */
const Hero8 = () => {
  return (
    <div data-gsap-reveal className='mt-20 ml-20 flex justify-between items-center p-6'>
      <div className='bg-white w-[1150px] h-120 shadow-2xl rounded-2xl flex justify-center items-center gap-14'>
        <div>
          <Image src={photo10} alt='a picture' width={500} height={500} className='h-100 rounded-2xl object-cover' />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='font-semibold text-4xl text-gray-800 mb-4'>Subscribe our Newsletter</h1>
          <p className='text-gray-600'>
            Be the first to discover new product features, upcoming events, <br />
            and special promotions tailored specifically for our valued <br />
            subscribers.
          </p>
          <div className='flex gap-2 mt-4'>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border w-85 border-gray-200 focus:outline-none focus:border-[#9871FF]"
            />
            <button className='text-white bg-[#9871FF] rounded p-2 w-25'>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------ Home ------------------------------ */
const Home = () => {
  const homeRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const home = homeRef.current
    if (!home) return

    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      home.querySelectorAll<HTMLElement>('[data-gsap-reveal]').forEach((section) => {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 88%',
              once: true,
            },
          },
        )
      })
    })

    return () => media.revert()
  }, [])

  return (
    <main ref={homeRef}>
      <Hero />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Why />
      <Hero6 />
      <Hero7 />
      <Hero8 />
    </main>
  )
}

export default Home