'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
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

/*
  Responsive approach:
  - Mobile first: everything stacks in one column.
  - <br className='hidden md:block' /> only breaks lines on larger screens,
    so text wraps naturally on phones.
  - The old fixed widths and offsets (w-[1050px], right-20, absolute, mt-150)
    are replaced with max-width containers, so nothing overflows sideways.
  - The overlaps (search bar over the hero, step cards over the banner) only
    apply from the lg breakpoint up.
*/

/* ------------------------------ Hero ------------------------------ */
const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row items-center justify-evenly gap-8 px-6 pt-10 pb-10 lg:pb-24 lg:min-h-[60vh]'>
      <div className='text-center md:text-left'>
        <h1 className="hero-title text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-medium leading-snug lg:leading-[70px] text-[#1a1a1a]">
          Find your doctor and <br className='hidden md:block' />make an appointment
        </h1>
        <p className='hero-sub mt-4'>
          Select preferred doctor and time slot to book an <br className='hidden md:block' /> appointment or consultation
        </p>
      </div>
      <div className='w-full max-w-[500px]'>
        <Image
          src={premium_photo}
          alt='a team of doctors'
          height={1200}
          width={800}
          priority
          className='hero-img w-full aspect-square rounded-3xl object-cover'
        />
      </div>
    </section>
  )
}

/* ------------------------------ Hero2 (appointment search) ------------------------------ */
// Edit these lists to match the places and patient types you support.
const locationSuggestions = ['Accra, Ghana', 'Kumasi, Ghana', 'London, England']
const whoOptions = ['1 Adult', '2 Adults', '1 Child', '1 Adult, 1 Child', 'Family']

const Hero2 = () => {
  const router = useRouter()
  const dateRef = useRef<HTMLInputElement>(null)
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const [who, setWho] = useState(whoOptions[0])
  const [today, setToday] = useState('')
  const [error, setError] = useState('')

  // Computed after mount so the server and browser agree on the HTML
  useEffect(() => {
    setToday(new Date().toLocaleDateString('en-CA')) // YYYY-MM-DD in local time
  }, [])

  const openDatePicker = () => {
    try {
      dateRef.current?.showPicker?.()
    } catch {
      // Some browsers only open the picker from the icon: ignore
    }
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!location.trim()) {
      setError('Enter a location.')
      return
    }
    if (!date) {
      setError('Choose an appointment date.')
      return
    }
    if (today && date < today) {
      setError('Pick today or a later date.')
      return
    }

    setError('')
    const params = new URLSearchParams({ location: location.trim(), date, who })
    router.push(`/search?${params.toString()}`)
  }

  const fieldClass =
    'flex items-center border border-gray-200 w-full lg:flex-1 h-[58px] px-4 sm:px-6 rounded-2xl overflow-hidden cursor-pointer focus-within:border-purple-600'
  const inputClass = 'bg-transparent outline-none text-gray-600 w-full leading-tight'

  return (
    <form
      onSubmit={handleSearch}
      noValidate
      className='search-bar bg-white rounded-2xl shadow-2xl p-5 flex flex-col gap-5 relative z-10 w-[calc(100%-3rem)] max-w-[1050px] mx-auto lg:-mt-20'
    >
      <div className='flex justify-between items-center gap-4'>
        <h1 className="font-bold text-purple-600"><u>General</u></h1>
        {error && (
          <p role='alert' className='text-red-600 text-sm text-right'>
            {error}
          </p>
        )}
      </div>

      <div className='flex flex-col lg:flex-row gap-4'>
        {/* Location */}
        <label className={fieldClass}>
          <Image src={locationpin} alt="" width={30} height={30} className='inline-block mr-2' />
          <div className='flex flex-col w-full min-w-0'>
            <span className='text-gray-400 text-sm leading-tight'>Location</span>
            <input
              type='text'
              list='location-suggestions'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder='City or area'
              autoComplete='off'
              className={inputClass}
            />
            <datalist id='location-suggestions'>
              {locationSuggestions.map((l) => (
                <option key={l} value={l} />
              ))}
            </datalist>
          </div>
        </label>

        {/* Appointment date */}
        <label className={fieldClass}>
          <Image src={caluser} alt="" width={30} height={30} className='inline-block mr-2' />
          <div className='flex flex-col w-full min-w-0'>
            <span className='text-gray-400 text-sm leading-tight'>Appointment date</span>
            <input
              ref={dateRef}
              type='date'
              value={date}
              min={today}
              onChange={(e) => setDate(e.target.value)}
              onClick={openDatePicker}
              className={`${inputClass} [&::-webkit-calendar-picker-indicator]:hidden`}
            />
          </div>
        </label>

        {/* Who */}
        <label className={fieldClass}>
          <Image src={accountuser} alt="" width={30} height={30} className='inline-block mr-2' />
          <div className='flex flex-col w-full min-w-0'>
            <span className='text-gray-400 text-sm leading-tight'>Who</span>
            <select
              value={who}
              onChange={(e) => setWho(e.target.value)}
              className={`${inputClass} cursor-pointer`}
            >
              {whoOptions.map((w) => (
                <option key={w} value={w}>
                  {w}
                </option>
              ))}
            </select>
          </div>
        </label>

        <button
          type='submit'
          className='bg-purple-600 rounded-2xl text-white px-6 h-[58px] w-full lg:w-40 flex items-center justify-center'
        >
          <Image src={sbtn} alt="" width={20} height={20} className='inline-block mr-2' />
          Search
        </button>
      </div>
    </form>
  )
}

/* ------------------------------ Hero3 (banner) ------------------------------ */
const Hero3 = () => {
  return (
    <section className='banner mx-auto mt-10 text-white bg-[#9871FF] rounded-2xl shadow-lg w-[calc(100%-3rem)] max-w-[1200px] px-6 py-10 lg:h-[290px] lg:pt-14'>
      <div className='flex flex-col lg:flex-row justify-evenly items-center gap-6 text-center lg:text-left'>
        <h1 className='font-bold text-2xl'>Easy Steps To Get Your <br className='hidden md:block' />Solution</h1>
        <p>Easily make an appointment with our best doctor for your <br className='hidden md:block' />families in the same day or next day</p>
        <button className='bg-white rounded-xl text-[#3b92f8] px-6 h-10 shrink-0'>Make an appointment</button>
      </div>
    </section>
  )
}

/* ------------------------------ Hero4 (steps) ------------------------------ */
const stepsData = [
  { icon: accountuser2, title: 'Search Doctor', lines: ['Before book appointment', 'first of all search doctor by', 'category'] },
  { icon: locationpin2, title: 'Choose Your Location', lines: ['Then enter your location and', 'we will help you find', 'appointment near you'] },
  { icon: caluser2, title: 'Schedule Appointment', lines: ['Then select a date to set an', 'appointment with your doctor'] },
  { icon: bulb, title: 'Get Your Solution', lines: ['We will help you find and', 'provide solutions for your', 'health'] },
]

const Hero4 = () => {
  return (
    <section className='steps relative z-10 mx-auto mt-10 lg:-mt-24 w-full max-w-[1200px] px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center'>
      {stepsData.map((s) => (
        <div
          key={s.title}
          className='step-card bg-white w-full max-w-[260px] min-h-60 p-4 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-4 text-center'
        >
          <Image src={s.icon} alt="" width={30} height={30} />
          <h2 className='font-bold'>{s.title}</h2>
          <div className='flex flex-col items-center justify-center'>
            {s.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

/* ------------------------------ Hero5 (services) ------------------------------ */
const servicesData = [
  {
    title: ['Make', 'Appointment'],
    text: ['We make it easy for you to make an', 'appointment with the doctor of your choice.'],
    img: premium_photo1,
    alt: 'a picture of a doctor',
    purple: false,
  },
  {
    title: ['Virtual', 'Consultation'],
    text: ["You don't have to bother because we provide", 'a helpful facility to consult online.'],
    img: photo3,
    alt: 'a picture of a doctor consulting online',
    purple: true,
  },
  {
    title: ['Doctor', 'Prescription'],
    text: ['We can also provide you with prescription', 'medicine after your online consultation.'],
    img: premium_photo5,
    alt: 'a picture of a prescription',
    purple: false,
  },
]

const Hero5 = () => {
  return (
    <section className='mx-auto max-w-7xl px-6 mt-16 lg:mt-24'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left'>
        <h2 className='font-bold text-3xl'>We Will Serve You With <br className='hidden md:block' />Healthcare Services</h2>
        <div className='flex flex-col items-center lg:items-start gap-3'>
          <p>We provide a variety of services that can make it easier for you to <br className='hidden md:block' />fulfill your needs.</p>
          <button className='bg-[#9871ff] text-white px-6 h-8 rounded-2xl'>Learn More</button>
        </div>
      </div>

      <div className='services flex flex-col lg:flex-row  justify-center gap-6 lg:gap-10 mt-10 lg:mt-14'>
        {servicesData.map((s) => (
          <div
            key={s.title.join(' ')}
            className={`service-card w-full max-w-[400px] min-h-[460px] rounded-2xl flex flex-col gap-5 pb-5 ${
              s.purple ? 'bg-[#9871ff] text-white' : 'bg-gray-100'
            }`}
          >
            <h3 className='font-bold text-2xl mx-5 mt-7'>
              {s.title[0]} <br />{s.title[1]}
            </h3>
            <p className='mx-5'>
              {s.text[0]} <br className='hidden md:block' />{s.text[1]}
            </p>
            <Image
              src={s.img}
              alt={s.alt}
              width={500}
              height={500}
              className='mx-5 mt-auto w-[calc(100%-2.5rem)] h-[220px] rounded-2xl object-cover'
            />
          </div>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------ Why ------------------------------ */
const Why = () => {
  return (
    <section className='why mx-auto max-w-7xl px-6 mt-20 lg:mt-28'>
      <div className='flex flex-col gap-4'>
        <h2 className='why-line text-[#9871FF]'>WHY CHOOSE US</h2>
        <p className='why-line text-3xl md:text-4xl lg:text-5xl font-bold'>
          We provide the health services <br className='hidden lg:block' />for patients. You can consult with our
        </p>
        <p className='why-line text-[#9871FF] text-3xl md:text-4xl lg:text-5xl font-bold'>
          professional doctors by making an <br className='hidden lg:block' />appointment consult.
        </p>
      </div>

      <div className='why-body flex flex-col lg:flex-row justify-evenly items-center gap-12 mt-14 lg:mt-20'>
        <div className='why-copy flex flex-col gap-4'>
          <h2 className='text-[#9871FF]'>OUR DOCTORS</h2>
          <h3 className='font-bold text-3xl'>Consultation with our <br className='hidden md:block' /> professional doctors</h3>
          <p className='text-gray-600'>
            Not to worry, our professional doctors are experienced in treating and serving the{' '}
            <br className='hidden lg:block' />
            needs of patients. We have doctors from various specialties, so that our patients{' '}
            <br className='hidden lg:block' />
            will be facilitated in curing all diseases.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6'>
            <div>
              <h3
                className='stat-number text-[#9871FF] font-bold text-3xl'
                data-value='10'
                data-prefix='+'
                data-suffix=' yrs'
              >
                +10 yrs
              </h3>
              <p className='text-gray-600'>
                Most of our doctors have 10+ years of experience serving patients
              </p>
            </div>
            <div>
              <h3
                className='stat-number text-[#9871FF] font-bold text-3xl'
                data-value='230'
                data-prefix='+'
                data-suffix='K'
              >
                +230K
              </h3>
              <p className='text-gray-600'>
                They have been serving patients both online and offline
              </p>
            </div>
          </div>
        </div>
        <div className='why-img w-full max-w-[500px]'>
          <Image
            src={photo4}
            alt='a picture of a doctor'
            width={500}
            height={500}
            className='rounded-3xl w-full h-auto'
          />
        </div>
      </div>
    </section>
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
  return (
    <section className="topics bg-[#9871FF] flex flex-col items-center mt-16 lg:mt-24 py-12 px-6 md:px-12 lg:px-24">
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center">
        Find providers who can <br className='hidden md:block' />
        help with these topics
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 w-full max-w-5xl'>
        {topics.map((t) => (
          <div key={t.title} className="topic-card bg-white p-4 rounded-lg shadow-lg flex gap-4 sm:gap-5 min-h-40">
            <Image
              src={t.img}
              alt={`${t.title} topic`}
              width={100}
              height={100}
              className="rounded-xl w-20 h-20 object-cover mt-2 shrink-0"
            />
            <div className="flex flex-col p-2 gap-3 min-w-0">
              <h3 className="font-bold">{t.title}</h3>
              <p className="text-gray-600">{t.text}</p>
              <Link href="/services" className="text-gray-600 font-bold">
                Learn more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------ Hero7 (primary instruction) ------------------------------ */
const checklistLeft = ['Complete Daily Task', 'Healthy Food', 'Daily Morning Walk', 'Family Time']
const checklistRight = ['Care of Time Management', 'Proper Sound Sleep', 'Drinking Water', 'Gym Workout']

const CheckItem = ({ label }: { label: string }) => (
  <div className='check-item flex gap-2'>
    <Image src={tick} alt='' width={100} height={100} className='w-5' />
    <p>{label}</p>
  </div>
)

const Hero7 = () => {
  return (
    <section className='care flex flex-col items-center mt-16 lg:mt-24 px-6 text-center'>
      <h2 className='text-3xl md:text-4xl font-bold'>
        Create natural life after treat <br className='hidden md:block' />from mental health medicare
      </h2>
      <p className='text-gray-600 mt-4'>
        Medicare patient care is paramount - the driving force in everything we do. LifeStance is committed
      </p>
      <p className='text-gray-600'>to state-of-the-art clinical excellence</p>

      <div className='flex flex-col lg:flex-row items-center lg:items-start mt-12 lg:mt-20 gap-12 lg:gap-20 max-w-7xl text-left'>
        <div className='flex flex-col gap-8 lg:gap-10'>
          <h3 className='font-bold'>Primary Instruction</h3>
          <p className='text-gray-600'>
            The primary care mental health workers provide one-to-one support to people within GP
            practices, helping with discharge from secondary care, liaising between services and
            providing ongoing mental health support.
          </p>
          <p className='text-gray-600'>
            Listen with curiosity and empathize with them. It may be helpful to tell your child
            about other people who experience similar problems. If you or someone else your child
            trusts have mental health conditions, explain that the same way you would tell them
            about diabetes.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-600'>
            <div className='flex flex-col gap-5'>
              {checklistLeft.map((item) => (
                <CheckItem key={item} label={item} />
              ))}
              <button className='rounded px-6 py-2 text-white bg-[#9871FF] w-fit'>Book Now</button>
            </div>
            <div className='flex flex-col gap-5'>
              {checklistRight.map((item) => (
                <CheckItem key={item} label={item} />
              ))}
            </div>
          </div>
        </div>
        <div className='w-full max-w-[500px] shrink-0'>
          <Image
            src={photo9}
            alt="a picture of care"
            width={500}
            height={500}
            className="care-img rounded-2xl w-full h-auto lg:h-[600px] object-cover"
          />
        </div>
      </div>
    </section>
  )
}

/* ------------------------------ Hero8 (newsletter) ------------------------------ */
const Hero8 = () => {
  return (
    <section className='news mt-16 lg:mt-24 px-6'>
      <div className='news-box mx-auto bg-white w-full max-w-[1150px] shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row items-center gap-6 md:gap-14'>
        <Image
          src={photo10}
          alt='a picture of subscribers'
          width={500}
          height={500}
          className='w-full md:w-1/2 h-60 md:h-[480px] object-cover'
        />
        <div className='flex flex-col items-center justify-center text-center px-6 pb-8 md:py-8 md:pr-10'>
          <h2 className='font-semibold text-3xl md:text-4xl text-gray-800 mb-4'>Subscribe our Newsletter</h2>
          <p className='text-gray-600'>
            Be the first to discover new product features, upcoming events, and special promotions
            tailored specifically for our valued subscribers.
          </p>
          <div className='flex flex-col sm:flex-row gap-2 mt-4 w-full'>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 min-w-0 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#9871FF]"
            />
            <button className='text-white bg-[#9871FF] rounded px-6 py-3'>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------ Home ------------------------------ */
const Home = () => {
  const homeRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      // Skip every animation for visitors who prefer reduced motion
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Remove leftover transforms so the layout keeps working after each animation
        const clear = 'transform,opacity,clipPath'

        // On phones, slide in vertically instead of sideways (no horizontal overflow)
        const side = window.matchMedia('(min-width: 1024px)').matches ? 60 : 0

        // 1. Page-load intro: title, text, photo reveal, then the search bar
        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .from('.hero-title', { y: 50, opacity: 0, duration: 0.9, clearProps: clear })
          .from('.hero-sub', { y: 24, opacity: 0, duration: 0.6, clearProps: clear }, '-=0.5')
          .fromTo(
            '.hero-img',
            { clipPath: 'inset(0% 0% 100% 0% round 24px)', scale: 1.1 },
            {
              clipPath: 'inset(0% 0% 0% 0% round 24px)',
              scale: 1,
              duration: 1.1,
              ease: 'power4.out',
              clearProps: clear + ',scale',
            },
            '-=0.8'
          )
          .from('.search-bar', { y: 40, opacity: 0, duration: 0.7, clearProps: clear }, '-=0.5')

        // Helper: play a "from" animation once when its section scrolls into view
        const reveal = (trigger: string, targets: string, vars: gsap.TweenVars, start = 'top 85%') =>
          gsap.from(targets, {
            duration: 0.8,
            ease: 'power3.out',
            clearProps: clear,
            ...vars,
            scrollTrigger: { trigger, start, once: true },
          })

        // 2. Banner scales in
        reveal('.banner', '.banner', { scale: 0.94, opacity: 0 })

        // 3. Four steps rise one after another
        reveal('.steps', '.step-card', { y: 60, opacity: 0, stagger: 0.12 }, 'top 92%')

        // 4. Service cards
        reveal('.services', '.service-card', { y: 80, opacity: 0, stagger: 0.15 }, 'top 90%')

        // 5. "Why choose us": headline lines, copy from the left, photo from the right
        reveal('.why', '.why-line', { y: 40, opacity: 0, stagger: 0.15 })
        reveal('.why-body', '.why-copy', side ? { x: -side, opacity: 0 } : { y: 40, opacity: 0 })
        reveal('.why-body', '.why-img', side ? { x: side, opacity: 0 } : { y: 40, opacity: 0 })

        // 6. Stats count up once
        gsap.utils.toArray<HTMLElement>('.stat-number').forEach((el) => {
          const target = Number(el.dataset.value)
          const prefix = el.dataset.prefix ?? ''
          const suffix = el.dataset.suffix ?? ''
          const counter = { n: 0 }
          gsap.to(counter, {
            n: target,
            duration: 1.6,
            ease: 'power1.out',
            scrollTrigger: { trigger: el, start: 'top 92%', once: true },
            onUpdate: () => {
              el.textContent = `${prefix}${Math.round(counter.n)}${suffix}`
            },
          })
        })

        // 7. Topic cards enter from alternating sides (or rise on phones)
        reveal(
          '.topics',
          '.topic-card',
          side
            ? { x: (i: number) => (i % 2 === 0 ? -side : side), opacity: 0, stagger: 0.12 }
            : { y: 40, opacity: 0, stagger: 0.12 }
        )

        // 8. Checklist ticks and photo
        reveal('.care', '.check-item', { x: -24, opacity: 0, stagger: 0.07, duration: 0.5 }, 'top 55%')
        reveal('.care', '.care-img', { scale: 0.94, opacity: 0 }, 'top 55%')

        // 9. Newsletter box
        reveal('.news', '.news-box', { y: 50, opacity: 0 }, 'top 90%')
      })
    }, homeRef)

    // Recalculate trigger positions once images have settled
    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 400)

    return () => {
      window.clearTimeout(refresh)
      ctx.revert()
    }
  }, [])

  return (
    <main ref={homeRef} className='overflow-x-hidden pb-16'>
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