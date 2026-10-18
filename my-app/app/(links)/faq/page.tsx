'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Category = 'Appointments' | 'Online consultation' | 'For doctors' | 'Account'

type Faq = { category: Category; question: string; answer: string }

const categories: Category[] = ['Appointments', 'Online consultation', 'For doctors', 'Account']

// Placeholder answers: edit these to match how your platform really works.
const faqs: Faq[] = [
  {
    category: 'Appointments',
    question: 'How do I book an appointment?',
    answer:
      'Search for a doctor by category, enter your location, pick a date and time slot, then confirm your booking.',
  },
  {
    category: 'Appointments',
    question: 'Can I see a doctor on the same day?',
    answer:
      'Yes. You can make an appointment for the same day or the next day, depending on the doctor’s available time slots.',
  },
  {
    category: 'Appointments',
    question: 'Can I change or cancel my appointment?',
    answer:
      'Yes. Open your appointments after logging in, then choose a new time slot or cancel the booking.',
  },
  {
    category: 'Online consultation',
    question: 'How does a virtual consultation work?',
    answer:
      'Book a virtual consultation, then join it at your appointment time from your phone or computer. You speak with the doctor online, with no travel needed.',
  },
  {
    category: 'Online consultation',
    question: 'Can I get a prescription after an online consultation?',
    answer:
      'Yes. If the doctor decides you need medicine, they can provide a prescription after your consultation.',
  },
  {
    category: 'Online consultation',
    question: 'Do you offer mental health support?',
    answer:
      'Yes. You can find providers who help with topics such as depression, anxiety, mood swings and personality disorders. If you are in an emergency, please contact your local emergency services instead of booking online.',
  },
  {
    category: 'For doctors',
    question: 'How do I join as a doctor?',
    answer:
      'Create an account, choose the doctor option, and add your specialty, location and experience. Your profile is reviewed before you can accept bookings.',
  },
  {
    category: 'For doctors',
    question: 'Can I set my own working hours?',
    answer:
      'Yes. You choose the days and time slots you are available, and patients can only book those slots.',
  },
  {
    category: 'Account',
    question: 'Do I need an account to book?',
    answer:
      'Yes. A free account lets you book appointments, manage them and receive your prescriptions in one place.',
  },
  {
    category: 'Account',
    question: 'I forgot my password. What do I do?',
    answer:
      'On the login page, choose “Forgot password?” and follow the steps sent to your email address.',
  },
]

const FaqItem = ({
  faq,
  open,
  onToggle,
}: {
  faq: Faq
  open: boolean
  onToggle: () => void
}) => {
  const panel = useRef<HTMLDivElement>(null)
  const first = useRef(true)

  useEffect(() => {
    if (!panel.current) return
    // Skip the animation on first render and for reduced motion
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const duration = first.current || reduce ? 0 : 0.35
    first.current = false
    gsap.to(panel.current, {
      height: open ? 'auto' : 0,
      duration,
      ease: 'power2.out',
    })
  }, [open])

  return (
    <div className='faq-item bg-white rounded-2xl shadow-lg border border-gray-100'>
      <button
        type='button'
        onClick={onToggle}
        aria-expanded={open}
        className='w-full flex justify-between items-center gap-4 text-left p-5 font-bold'
      >
        <span>{faq.question}</span>
        <span
          className={`text-[#9871FF] text-2xl leading-none transition-transform ${
            open ? 'rotate-45' : ''
          }`}
          aria-hidden='true'
        >
          +
        </span>
      </button>
      <div ref={panel} style={{ height: 0 }} className='overflow-hidden'>
        <p className='px-5 pb-5 text-gray-600'>{faq.answer}</p>
      </div>
    </div>
  )
}

const FaqPage = () => {
  const root = useRef<HTMLElement>(null)
  const [category, setCategory] = useState<Category>('Appointments')
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  const visible = faqs.filter((f) => f.category === category)

  // Page intro animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .from('.hero-title', { y: 40, opacity: 0, duration: 0.8 })
          .from('.hero-text', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')

        gsap.from('.cta-box', {
          scale: 0.95,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.cta-box', start: 'top 90%' },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  // Animate the questions in whenever the category changes
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const tween = gsap.fromTo(
      '.faq-item',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out' }
    )
    return () => {
      tween.kill()
    }
  }, [category])

  const changeCategory = (c: Category) => {
    setCategory(c)
    setOpenQuestion(null)
  }

  return (
    <main ref={root} className='flex flex-col items-center pb-20 overflow-x-hidden'>
      {/* Header */}
      <section className='w-full bg-[#9871FF] text-white text-center py-20 px-6'>
        <h1 className='hero-title text-4xl md:text-5xl font-bold'>
          Frequently asked <br />questions
        </h1>
        <p className='hero-text mt-4'>
          Quick answers about booking, consultations and your account.
        </p>
      </section>

      {/* Questions */}
      <section className='w-full max-w-3xl px-6 mt-16'>
        <div className='flex flex-wrap justify-center gap-3' role='tablist' aria-label='FAQ categories'>
          {categories.map((c) => (
            <button
              key={c}
              type='button'
              role='tab'
              aria-selected={category === c}
              onClick={() => changeCategory(c)}
              className={`rounded-2xl px-5 py-2 font-bold ${
                category === c ? 'bg-[#9871FF] text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className='flex flex-col gap-4 mt-10'>
          {visible.map((faq) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              open={openQuestion === faq.question}
              onToggle={() =>
                setOpenQuestion((q) => (q === faq.question ? null : faq.question))
              }
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className='cta-box w-full max-w-[1200px] mt-24 mx-6 p-10 text-white bg-[#9871FF] rounded-2xl shadow-lg overflow-hidden'>
        <div className='flex flex-col md:flex-row justify-evenly items-center gap-6 text-center md:text-left'>
          <h2 className='font-bold text-2xl'>Still have a question?</h2>
          <p>
            Our team is happy to help. <br />
            Send us a message and we will get back to you.
          </p>
          <Link href='/contact' className='bg-white rounded-xl text-[#9871FF] font-bold px-6 py-2'>
            Contact us
          </Link>
        </div>
      </section>
    </main>
  )
}

export default FaqPage