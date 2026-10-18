import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import premium_photo1 from '../../../public/Images/premium_photo1.webp'
import premium_photo5 from '../../../public/Images/premium_photo5.webp'
import photo3 from '../../../public/Images/photo3.webp'
import photo4 from '../../../public/Images/photo4.webp'
import photo5 from '../../../public/Images/photo5.webp'
import photo6 from '../../../public/Images/photo6.webp'
import photo7 from '../../../public/Images/photo7.webp'
import photo8 from '../../../public/Images/photo8.webp'
import tick from '../../../public/Images/tick.svg'
import accountuser2 from '../../../public/Images/accountuser2.svg'
import locationpin2 from '../../../public/Images/locationpin2.svg'
import caluser2 from '../../../public/Images/caluser2.svg'
import bulb from '../../../public/Images/bulb.svg'

const services = [
  {
    title: 'Make Appointment',
    text: 'Book a time slot with the doctor of your choice, in person, on the same day or the next.',
    img: premium_photo1,
    highlight: false,
  },
  {
    title: 'Virtual Consultation',
    text: 'Talk to a doctor online from wherever you are, with no travel and no waiting room.',
    img: photo3,
    highlight: true,
  },
  {
    title: 'Doctor Prescription',
    text: 'Get a prescription after your online consultation and collect your medicine.',
    img: premium_photo5,
    highlight: false,
  },
]

const topics = [
  { title: 'Personality Disorders', text: 'Personality disorders are a group of mental illnesses.', img: photo5 },
  { title: 'Depression', text: 'Depression is a common and serious medical illness.', img: photo6 },
  { title: 'Anxiety', text: 'Anxiety is a feeling of fear, dread and uneasiness.', img: photo7 },
  { title: 'Mood Swings', text: 'Support for anxiety, depression, and more.', img: photo8 },
]

const steps = [
  { title: 'Search Doctor', text: 'Search for a doctor by category.', icon: accountuser2 },
  { title: 'Choose Your Location', text: 'Enter your location to find appointments near you.', icon: locationpin2 },
  { title: 'Schedule Appointment', text: 'Select a date to see your doctor.', icon: caluser2 },
  { title: 'Get Your Solution', text: 'We help you find the care you need.', icon: bulb },
]

const included = [
  'Doctors from various specialties',
  'Online and in-person visits',
  'Same-day or next-day appointments',
  'Prescriptions after consultation',
  'Ongoing mental health support',
  'Experienced doctors with 10+ years of practice',
]

const ServicesPage = () => {
  return (
    <main className='flex flex-col items-center pb-20'>
      {/* Header */}
      <section className='w-full bg-[#9871FF] text-white text-center py-20 px-6'>
        <h1 className='text-4xl md:text-5xl font-bold'>
          We will serve you with <br />healthcare services
        </h1>
        <p className='mt-4'>
          We provide a variety of services that can make it easier for you <br />
          to fulfill your needs.
        </p>
        <Link
          href='/auth/register'
          className='inline-block mt-8 bg-white text-[#9871FF] font-bold rounded-2xl px-6 py-3'
        >
          Make an appointment
        </Link>
      </section>

      {/* Main services */}
      <section className='w-full max-w-7xl px-6 mt-20'>
        <h2 className='text-3xl font-bold text-center'>Our services</h2>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-10 mt-10'>
          {services.map((s) => (
            <div
              key={s.title}
              className={`w-full max-w-[400px] min-h-[460px] rounded-2xl p-5 flex flex-col gap-5 ${
                s.highlight ? 'bg-[#9871FF] text-white' : 'bg-gray-100 text-black'
              }`}
            >
              <h3 className='font-bold text-2xl mt-2'>{s.title}</h3>
              <p>{s.text}</p>
              <Image
                src={s.img}
                alt={`${s.title} service`}
                width={500}
                height={500}
                className='w-full h-[220px] object-cover rounded-2xl mt-auto'
              />
            </div>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className='w-full max-w-7xl px-6 mt-24 flex flex-col lg:flex-row justify-evenly items-center gap-12'>
        <div className='flex flex-col gap-4 max-w-xl'>
          <h2 className='text-[#9871FF]'>WHY CHOOSE US</h2>
          <h3 className='font-bold text-3xl'>Consultation with our <br />professional doctors</h3>
          <p className='text-gray-600'>
            Our doctors are experienced in treating and serving the needs of patients across
            many specialties, so you can get the right care in one place.
          </p>
          <div className='flex flex-col gap-3 mt-4 text-gray-600'>
            {included.map((item) => (
              <div key={item} className='flex gap-2'>
                <Image src={tick} alt='' width={100} height={100} className='w-5' />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <Image
          src={photo4}
          alt='a picture of a doctor'
          width={500}
          height={500}
          className='rounded-3xl'
        />
      </section>

      {/* Mental health topics */}
      <section className='w-full bg-[#9871FF] mt-24 py-16 px-6 flex flex-col items-center'>
        <h2 className='text-white text-3xl md:text-4xl font-bold text-center'>
          Find providers who can <br />help with these topics
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 w-full max-w-5xl'>
          {topics.map((t) => (
            <div key={t.title} className='bg-white p-4 rounded-lg shadow-lg flex gap-5 h-40'>
              <Image
                src={t.img}
                alt={`${t.title} topic`}
                width={100}
                height={100}
                className='rounded-xl w-20 h-20 object-cover mt-4'
              />
              <div className='flex flex-col p-2 gap-3'>
                <h3 className='font-bold'>{t.title}</h3>
                <p className='text-gray-600'>{t.text}</p>
                <Link href='/auth/register' className='text-gray-600 font-bold'>
                  Book a provider
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className='w-full max-w-7xl px-6 mt-24'>
        <h2 className='text-3xl font-bold text-center'>How it works</h2>
        <div className='flex flex-wrap justify-center gap-6 mt-10'>
          {steps.map((s) => (
            <div
              key={s.title}
              className='bg-white w-60 h-60 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-4 p-4 text-center'
            >
              <Image src={s.icon} alt='' width={30} height={30} />
              <h3 className='font-bold'>{s.title}</h3>
              <p className='text-gray-600'>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className='w-full max-w-[1200px] mt-24 mx-6 p-10 text-white bg-[#9871FF] rounded-2xl shadow-lg'>
        <div className='flex flex-col md:flex-row justify-evenly items-center gap-6 text-center md:text-left'>
          <h2 className='font-bold text-2xl'>Easy steps to get your <br />solution</h2>
          <p>
            Easily make an appointment with our best doctor for your <br />
            family on the same day or next day.
          </p>
          <Link href='/register' className='bg-white rounded-xl text-[#9871FF] font-bold px-6 py-2'>
            Make an appointment
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage