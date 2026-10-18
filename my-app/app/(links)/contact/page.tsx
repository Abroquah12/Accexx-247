'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import locationpin2 from '../../../public/Images/locationpin2.svg'
import accountuser2 from '../../../public/Images/accountuser2.svg'
import caluser2 from '../../../public/Images/caluser2.svg'

gsap.registerPlugin(ScrollTrigger)

// Placeholder details: replace with your real contact information.
const contactInfo = [
  { title: 'Visit us', lines: ['Your street address', 'City, Country'], icon: locationpin2 },
  { title: 'Call or email', lines: ['+000 00 000 0000', 'hello@yourdomain.com'], icon: accountuser2 },
  { title: 'Opening hours', lines: ['Monday to Friday: 8am to 6pm', 'Weekend: 9am to 2pm'], icon: caluser2 },
]

const subjects = ['General question', 'Appointment help', 'Doctor registration', 'Technical issue', 'Other']

const ContactPage = () => {
  const root = useRef<HTMLElement>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState(subjects[0])
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .from('.hero-title', { y: 40, opacity: 0, duration: 0.8 })
          .from('.hero-text', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')

        gsap.from('.info-card', {
          y: 50,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.info', start: 'top 85%' },
        })

        gsap.from('.form-box', {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.form-box', start: 'top 85%' },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      // TODO: send the message to your backend, e.g. a Next.js route handler
      // (app/api/contact/route.ts) that emails you or saves to Firestore.
      console.log('Contact message', { name, email, phone, subject, message })
      setSent(true)
      setName('')
      setEmail('')
      setPhone('')
      setSubject(subjects[0])
      setMessage('')
    } catch (err) {
      setError('Your message could not be sent. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#9871FF]'

  return (
    <main ref={root} className='flex flex-col items-center pb-20 overflow-x-hidden'>
      {/* Header */}
      <section className='w-full bg-[#9871FF] text-white text-center py-20 px-6'>
        <h1 className='hero-title text-4xl md:text-5xl font-bold'>
          We would love <br />to hear from you
        </h1>
        <p className='hero-text mt-4'>
          Questions about appointments, doctors or your account? Send us a message.
        </p>
      </section>

      {/* Contact info */}
      <section className='info w-full max-w-5xl px-6 -mt-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
        {contactInfo.map((c) => (
          <div
            key={c.title}
            className='info-card bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center text-center gap-3'
          >
            <Image src={c.icon} alt='' width={30} height={30} />
            <h2 className='font-bold'>{c.title}</h2>
            <div className='text-gray-600'>
              {c.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Form */}
      <section className='form-box w-full max-w-3xl px-6 mt-20'>
        <div className='bg-white rounded-2xl shadow-2xl p-8 sm:p-12'>
          <h2 className='text-3xl font-bold text-[#1a1a1a]'>Send us a message</h2>
          <p className='text-gray-600 mt-2'>We usually reply within one working day.</p>

          {sent ? (
            <div className='mt-8 rounded-2xl bg-gray-100 p-6' role='status'>
              <h3 className='font-bold text-xl'>Message sent</h3>
              <p className='text-gray-600 mt-2'>
                Thank you for contacting us. We will reply to your email soon.
              </p>
              <button
                type='button'
                onClick={() => setSent(false)}
                className='mt-4 bg-[#9871FF] text-white rounded-2xl px-6 py-2 font-bold'
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='mt-8 flex flex-col gap-5'>
              <div className='flex flex-col sm:flex-row gap-5'>
                <div className='flex flex-col gap-1 flex-1'>
                  <label htmlFor='name' className='text-gray-600 text-sm'>Full name</label>
                  <input
                    id='name'
                    type='text'
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Your full name'
                    className={inputClass}
                  />
                </div>
                <div className='flex flex-col gap-1 flex-1'>
                  <label htmlFor='email' className='text-gray-600 text-sm'>Email address</label>
                  <input
                    id='email'
                    type='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='you@example.com'
                    className={inputClass}
                  />
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-5'>
                <div className='flex flex-col gap-1 flex-1'>
                  <label htmlFor='phone' className='text-gray-600 text-sm'>Phone number (optional)</label>
                  <input
                    id='phone'
                    type='tel'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='+233 ...'
                    className={inputClass}
                  />
                </div>
                <div className='flex flex-col gap-1 flex-1'>
                  <label htmlFor='subject' className='text-gray-600 text-sm'>Subject</label>
                  <select
                    id='subject'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className={`${inputClass} bg-white`}
                  >
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor='message' className='text-gray-600 text-sm'>Message</label>
                <textarea
                  id='message'
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder='How can we help you?'
                  className={`${inputClass} resize-none`}
                />
              </div>

              {error && <p className='text-red-600 text-sm'>{error}</p>}

              <button
                type='submit'
                disabled={loading}
                className='bg-[#9871FF] text-white rounded-2xl h-[50px] font-bold disabled:opacity-60'
              >
                {loading ? 'Sending...' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}

export default ContactPage