'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import photo4 from '../../../public/images/photo4.webp'

type Role = 'patient' | 'doctor'

const RegisterPage = () => {
  const [role, setRole] = useState<Role>('patient')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [agree, setAgree] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    if (!agree) {
      setError('Please accept the terms to continue.')
      return
    }

    setLoading(true)
    try {
      
      console.log('Register with', { role, fullName, email, phone })
    } catch (err) {
      setError('Could not create your account. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#9871FF]'

  return (
    <main className='min-h-screen flex items-center justify-center mt-20 bg-gray-50 p-6'>
      <div className='bg-white w-full max-w-[1000px] rounded-2xl shadow-2xl overflow-hidden flex'>
        {/* Form side */}
        <div className='w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center'>
          <Link href='/' className='text-[#9871FF] font-bold text-xl mb-6'>
            Accexx247
          </Link>
          <h1 className='text-3xl font-bold text-[#1a1a1a]'>Create your account</h1>
          <p className='text-gray-600 mt-2'>Book appointments and consult doctors in minutes.</p>

          {/* Role switch */}
          <div className='flex gap-2 mt-6 bg-gray-100 p-1 rounded-2xl'>
            {(['patient', 'doctor'] as Role[]).map((r) => (
              <button
                key={r}
                type='button'
                onClick={() => setRole(r)}
                className={`flex-1 py-2 rounded-2xl font-bold capitalize ${
                  role === r ? 'bg-[#9871FF] text-white' : 'text-gray-600'
                }`}
              >
                {r === 'patient' ? "I'm a patient" : "I'm a doctor"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className='mt-6 flex flex-col gap-4'>
            <div className='flex flex-col gap-1'>
              <label htmlFor='fullName' className='text-gray-600 text-sm'>Full name</label>
              <input
                id='fullName'
                type='text'
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder='Your full name'
                className={inputClass}
              />
            </div>

            <div className='flex flex-col sm:flex-row gap-4'>
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
              <div className='flex flex-col gap-1 flex-1'>
                <label htmlFor='phone' className='text-gray-600 text-sm'>Phone number</label>
                <input
                  id='phone'
                  type='tel'
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder='+233 ...'
                  className={inputClass}
                />
              </div>
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor='password' className='text-gray-600 text-sm'>Password</label>
              <div className='relative'>
                <input
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='At least 8 characters'
                  className={`${inputClass} w-full pr-16`}
                />
                <button
                  type='button'
                  onClick={() => setShowPassword((s) => !s)}
                  className='absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-600'
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor='confirmPassword' className='text-gray-600 text-sm'>Confirm password</label>
              <input
                id='confirmPassword'
                type={showPassword ? 'text' : 'password'}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder='Re-enter your password'
                className={inputClass}
              />
            </div>

            <label className='flex items-start gap-2 text-sm text-gray-600'>
              <input
                type='checkbox'
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className='mt-1 accent-[#9871FF]'
              />
              <span>
                I agree to the{' '}
                <Link href='/terms' className='text-[#9871FF] font-bold'>Terms</Link> and{' '}
                <Link href='/privacy' className='text-[#9871FF] font-bold'>Privacy Policy</Link>
              </span>
            </label>

            {error && <p className='text-red-600 text-sm'>{error}</p>}

            <button
              type='submit'
              disabled={loading}
              className='bg-[#9871FF] text-white rounded-2xl h-[50px] font-bold disabled:opacity-60'
            >
              {loading ? 'Creating account...' : 'Register'}
            </button>
          </form>

          <p className='text-gray-600 mt-6 text-center'>
            Already have an account?
            <Link href='/login' className='text-[#9871FF] font-bold'>
              Login
            </Link>
          </p>
        </div>

        {/* Image side */}
        <div className='hidden md:block relative w-1/2'>
          <Image
            src={photo4}
            alt='a picture of a doctor'
            fill
            className='object-cover'
          />
          <div className='absolute inset-0 bg-[#9871FF]/40' />
          <div className='absolute bottom-10 left-10 right-10 text-white'>
            <h2 className='text-3xl font-bold'>Consult with professional doctors</h2>
            <p className='mt-2'>Join patients who book and consult online and in person.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default RegisterPage