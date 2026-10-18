'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import photo3 from '../../../public/images/photo3.webp'
import premium_photo1 from '../../../public/images/premium_photo1.webp'
import tick from '../../../public/images/tick.svg'
import accountuser2 from '../../../public/images/accountuser2.svg'
import caluser2 from '../../../public/images/caluser2.svg'
import bulb from '../../../public/images/bulb.svg'
import locationpin2 from '../../../public/images/locationpin2.svg'

gsap.registerPlugin(ScrollTrigger)

const benefits = [
  { title: 'Reach more patients', text: 'Patients searching for a doctor by category and location can find and book you.' },
  { title: 'Online and in-person', text: 'Offer virtual consultations and clinic visits from the same profile.' },
  { title: 'You control your time', text: 'Set the days and time slots you are available, and patients book only those.' },
  { title: 'Prescriptions after consultation', text: 'Provide prescriptions to patients after an online consultation.' },
]

const steps = [
  { title: 'Create your account', text: 'Register as a doctor with your details.', icon: accountuser2 },
  { title: 'Set up your profile', text: 'Add your specialty, location and experience.', icon: locationpin2 },
  { title: 'Choose your availability', text: 'Pick the days and time slots you can see patients.', icon: caluser2 },
  { title: 'Start seeing patients', text: 'Accept bookings and consult online or in person.', icon: bulb },
]

const requirements = [
  'A valid medical license',
  'Proof of identity',
  'Your specialty and years of experience',
  'The location where you practice',
]

const ForDoctorsPage = () => {
  const root = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .from('.hero-title', { y: 40, opacity: 0, duration: 0.8 })
          .from('.hero-text', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
          .from('.hero-btn', { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')

        gsap.from('.benefit-card', {
          y: 50,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.benefits', start: 'top 75%' },
        })

        gsap.from('.step-card', {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.steps', start: 'top 80%' },
        })

        gsap.from('.join-text', {
          x: -60,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.join', start: 'top 75%' },
        })
        gsap.from('.join-img', {
          x: 60,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.join', start: 'top 75%' },
        })

        gsap.from('.cta-box', {
          scale: 0.95,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.cta-box', start: 'top 85%' },
        })
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={root} className='flex flex-col items-center pb-20 overflow-x-hidden'>
      {/* Header */}
      <section className='w-full bg-[#9871FF] text-white py-20 px-6'>
        <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12'>
          <div className='text-center lg:text-left'>
            <h1 className='hero-title text-4xl md:text-5xl font-bold'>
              Grow your practice <br />with Accexx247
            </h1>
            <p className='hero-text mt-4'>
              Join our network of doctors, meet patients online and in person, <br />
              and spend your time on care instead of paperwork.
            </p>
            <Link
              href='/register'
              className='hero-btn inline-block mt-8 bg-white text-[#9871FF] font-bold rounded-2xl px-6 py-3'
            >
              Join as a doctor
            </Link>
          </div>
          <Image
            src={photo3}
            alt='a doctor consulting online'
            width={500}
            height={500}
            className='rounded-3xl w-full max-w-[420px] h-[360px] object-cover'
            priority
          />
        </div>
      </section>

      {/* Benefits */}
      <section className='benefits w-full max-w-5xl px-6 mt-24'>
        <h2 className='text-3xl font-bold text-center'>Why doctors join us</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
          {benefits.map((b) => (
            <div key={b.title} className='benefit-card bg-gray-100 rounded-2xl p-6 flex flex-col gap-3'>
              <h3 className='font-bold text-xl'>{b.title}</h3>
              <p className='text-gray-600'>{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works for doctors */}
      <section className='steps w-full max-w-7xl px-6 mt-24'>
        <h2 className='text-3xl font-bold text-center'>How to get started</h2>
        <div className='flex flex-wrap justify-center gap-6 mt-10'>
          {steps.map((s) => (
            <div
              key={s.title}
              className='step-card bg-white w-60 h-60 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-4 p-4 text-center'
            >
              <Image src={s.icon} alt='' width={30} height={30} />
              <h3 className='font-bold'>{s.title}</h3>
              <p className='text-gray-600'>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What you need */}
      <section className='join w-full max-w-7xl px-6 mt-24 flex flex-col lg:flex-row justify-evenly items-center gap-12'>
        <div className='join-text flex flex-col gap-4 max-w-xl'>
          <h2 className='text-[#9871FF]'>BEFORE YOU APPLY</h2>
          <h3 className='font-bold text-3xl'>What you will need</h3>
          <p className='text-gray-600'>
            Keep these ready so your profile can be reviewed and approved quickly.
          </p>
          <div className='flex flex-col gap-3 mt-2 text-gray-600'>
            {requirements.map((item) => (
              <div key={item} className='flex gap-2'>
                <Image src={tick} alt='' width={100} height={100} className='w-5' />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='join-img'>
          <Image
            src={premium_photo1}
            alt='a picture of a doctor'
            width={500}
            height={500}
            className='rounded-3xl w-full max-w-[500px] h-[400px] object-cover'
          />
        </div>
      </section>

      {/* CTA */}
      <section className='cta-box w-full max-w-[1200px] mt-24 mx-6 p-10 text-white bg-[#9871FF] rounded-2xl shadow-lg overflow-hidden'>
        <div className='flex flex-col md:flex-row justify-evenly items-center gap-6 text-center md:text-left'>
          <h2 className='font-bold text-2xl'>Ready to join <br />our doctors?</h2>
          <p>
            Create your account today and start <br />
            accepting appointments.
          </p>
          <Link href='/register' className='bg-white rounded-xl text-[#9871FF] font-bold px-6 py-2'>
            Join as a doctor
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ForDoctorsPage