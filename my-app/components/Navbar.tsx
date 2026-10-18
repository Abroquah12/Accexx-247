'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import logo from '../public/Images/logo.webp' // Adjust the path as necessary

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Service', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'For Doctors', href: 'doctors' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

const Navbar = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const panel = useRef<HTMLDivElement>(null)
  const first = useRef(true)

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  // Close the menu after navigating to another page
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Close with the Escape key
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Open and close the mobile menu with GSAP
  useEffect(() => {
    const el = panel.current
    if (!el) return

    // Nothing to animate on first render: the menu starts closed
    if (first.current) {
      first.current = false
      return
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const duration = reduce ? 0 : 0.35

    gsap.killTweensOf(el)

    if (open) {
      gsap.set(el, { visibility: 'visible' })
      gsap.to(el, { height: 'auto', duration, ease: 'power2.out' })
      gsap.fromTo(
        el.querySelectorAll('.mobile-item'),
        { y: -12, opacity: 0 },
        { y: 0, opacity: 1, duration: reduce ? 0 : 0.3, stagger: reduce ? 0 : 0.05, delay: reduce ? 0 : 0.1, ease: 'power2.out' }
      )
    } else {
      gsap.to(el, {
        height: 0,
        duration,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(el, { visibility: 'hidden' })
        },
      })
    }
  }, [open])

  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-b-gray-100 text-gray-800">
        <div className="flex justify-between items-center h-[72px] px-4 sm:px-8">
          {/* Logo */}
          <Link href="/" aria-label="Accexx247 home" className="shrink-0">
            <Image
              src={logo}
              alt="Logo"
              height={500}
              width={500}
              className="h-15 w-21 object-cover"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center space-x-4 text-[13px] font-semibold">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className={`mx-2 hover:text-gray-400 ${isActive(l.href) ? 'text-[#9871FF]' : 'text-black'}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop buttons */}
          <div className="hidden lg:flex items-center justify-evenly space-x-4">
            <Link href="/register" className="bg-[#9871FF] w-20 text-white py-1 rounded text-center">
              Register
            </Link>
            <Link
              href="/login"
              className="border border-solid border-[#9871FF] w-20 py-1 rounded text-[#9871FF] text-center"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="lg:hidden flex flex-col justify-center items-center w-11 h-11 rounded-lg"
          >
            <span
              className={`block h-0.5 w-6 bg-[#9871FF] rounded transition-transform duration-300 ${
                open ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#9871FF] rounded my-[5px] transition-opacity duration-200 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#9871FF] rounded transition-transform duration-300 ${
                open ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          ref={panel}
          style={{ height: 0, visibility: 'hidden' }}
          className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
        >
          <div className="flex flex-col px-4 sm:px-8 py-4 gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className={`mobile-item py-3 font-semibold border-b border-gray-100 ${
                  isActive(l.href) ? 'text-[#9871FF]' : 'text-black'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="mobile-item flex gap-3 mt-4">
              <Link href="/register" className="flex-1 bg-[#9871FF] text-white py-3 rounded text-center font-semibold">
                Register
              </Link>
              <Link
                href="/login"
                className="flex-1 border border-solid border-[#9871FF] py-3 rounded text-[#9871FF] text-center font-semibold"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* The navbar is fixed, so this spacer keeps page content from sitting underneath it */}
      <div aria-hidden="true" className="h-[72px]" />
    </header>
  )
}

export default Navbar