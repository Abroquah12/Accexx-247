'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import photo4 from '../../../public/Images/photo4.webp'
import photo9 from '../../../public/Images/photo9.webp'
import tick from '../../../public/Images/tick.svg'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 10, prefix: '+', suffix: ' yrs', label: 'Most of our doctors have 10+ years of experience serving patients' },
  { value: 230, prefix: '+', suffix: 'K', label: 'Patients served, both online and offline' },
  { value: 4, prefix: '', suffix: '', label: 'Ways to get care: appointment, virtual consultation, prescription and mental health support' },
]

const values = [
  { title: 'Patient first', text: 'Patient care is the driving force in everything we do.' },
  { title: 'Experienced doctors', text: 'Specialists from many fields, so you can get the right care in one place.' },
  { title: 'Easy access', text: 'Book online and see a doctor the same day or the next day.' },
  { title: 'Trust and privacy', text: 'We listen with curiosity, respect your story and keep your information safe.' },
]

const promises = [
  'Doctors from various specialties',
  'Online and in-person visits',
  'Prescriptions after your consultation',
  'Ongoing mental health support',
]

const AboutPage = () => {
  const root = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      // Only animate when the visitor has not asked for reduced motion
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // 1. Hero intro (plays once on load)
        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .from('.hero-title', { y: 40, opacity: 0, duration: 0.8 })
          .from('.hero-text', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
          .from('.hero-btn', { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')

        // 2. Story: text slides in from the left, photo from the right
        gsap.from('.story-text', {
          x: -60,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.story', start: 'top 75%' },
        })
        gsap.from('.story-img', {
          x: 60,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.story', start: 'top 75%' },
        })

        // 3. Stats count up when they scroll into view
        gsap.utils.toArray<HTMLElement>('.stat-number').forEach((el) => {
          const target = Number(el.dataset.value)
          const prefix = el.dataset.prefix ?? ''
          const suffix = el.dataset.suffix ?? ''
          const counter = { n: 0 }
          gsap.to(counter, {
            n: target,
            duration: 1.6,
            ease: 'power1.out',
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
            onUpdate: () => {
              el.textContent = `${prefix}${Math.round(counter.n)}${suffix}`
            },
          })
        })

        // 4. Value cards stagger in
        gsap.from('.value-card', {
          y: 50,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.values', start: 'top 75%' },
        })

        // 5. Closing banner
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
      <section className='w-full bg-[#9871FF] text-white text-center py-24 px-6'>
        <h1 className='hero-title text-4xl md:text-5xl font-bold'>
          Care that puts <br />the patient first
        </h1>
        <p className='hero-text mt-4'>
          Accexx247 connects you with experienced doctors so you can book, consult <br />
          and get treated without the stress.
        </p>
        <Link
          href='/auth/register'
          className='hero-btn inline-block mt-8 bg-white text-[#9871FF] font-bold rounded-2xl px-6 py-3'
        >
          Make an appointment
        </Link>
      </section>

      {/* Story */}
      <section className='story w-full max-w-7xl px-6 mt-24 flex flex-col lg:flex-row justify-evenly items-center gap-12'>
        <div className='story-text flex flex-col gap-4 max-w-xl'>
          <h2 className='text-[#9871FF]'>ABOUT US</h2>
          <h3 className='font-bold text-3xl'>Healthcare that is easy to reach</h3>
          <p className='text-gray-600'>
            We provide health services for patients. You can consult with our professional
            doctors by making an appointment, online or in person.
          </p>
          <p className='text-gray-600'>
            Our doctors are experienced in treating and serving the needs of patients. We have
            doctors from various specialties, so our patients can be helped in one place.
          </p>
          <div className='flex flex-col gap-3 mt-2 text-gray-600'>
            {promises.map((item) => (
              <div key={item} className='flex gap-2'>
                <Image src={tick} alt='' width={100} height={100} className='w-5' />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='story-img'>
          <Image
            src={photo4}
            alt='a picture of a doctor'
            width={500}
            height={500}
            className='rounded-3xl'
          />
        </div>
      </section>

      {/* Stats */}
      <section className='w-full max-w-5xl px-6 mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 text-center'>
        {stats.map((s) => (
          <div key={s.label} className='flex flex-col items-center gap-2'>
            <h3
              className='stat-number text-[#9871FF] font-bold text-4xl'
              data-value={s.value}
              data-prefix={s.prefix}
              data-suffix={s.suffix}
            >
              {s.prefix}
              {s.value}
              {s.suffix}
            </h3>
            <p className='text-gray-600 max-w-[260px]'>{s.label}</p>
          </div>
        ))}
      </section>

      {/* Values */}
      <section className='values w-full bg-[#9871FF] mt-24 py-16 px-6 flex flex-col items-center'>
        <h2 className='text-white text-3xl md:text-4xl font-bold text-center'>What we stand for</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 w-full max-w-5xl'>
          {values.map((v) => (
            <div key={v.title} className='value-card bg-white p-6 rounded-lg shadow-lg flex flex-col gap-3'>
              <h3 className='font-bold text-xl'>{v.title}</h3>
              <p className='text-gray-600'>{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className='w-full max-w-7xl px-6 mt-24 flex flex-col lg:flex-row items-center justify-evenly gap-12'>
        <Image
          src={photo9}
          alt='a picture of care'
          width={500}
          height={500}
          className='rounded-2xl w-full max-w-[500px] h-[400px] object-cover'
        />
        <div className='flex flex-col gap-4 max-w-xl'>
          <h2 className='font-bold text-3xl'>Our mission</h2>
          <p className='text-gray-600'>
            Medical care should be simple to find and simple to use. We want every patient to
            search for a doctor, choose a time and get their solution without the long wait.
          </p>
          <p className='text-gray-600'>
            For mental health, we listen with curiosity, and we match people with providers who
            can support them for the long run.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className='cta-box w-full max-w-[1200px] mt-24 mx-6 p-10 text-white bg-[#9871FF] rounded-2xl shadow-lg relative overflow-hidden'>
        <div className='flex flex-col md:flex-row justify-evenly items-center gap-6 text-center md:text-left'>
          <h2 className='font-bold text-2xl'>Ready to see a doctor?</h2>
          <p>
            Make an appointment with our best doctors for your <br />
            family on the same day or next day.
          </p>
          <Link href='/auth/register' className='bg-white rounded-xl text-[#9871FF] font-bold px-6 py-2'>
            Get started
          </Link>
        </div>
      </section>
    </main>
  )
}

export default AboutPage