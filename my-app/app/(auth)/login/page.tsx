'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import premium_photo from '../../../public/Images/premium_photo.webp'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
    
      console.log('Login with', { email, password })
    } catch (err) {
      setError('Incorrect email or password. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className='min-h-screen flex items-center justify-center bg-gray-50 p-6'>
      <div className='bg-white w-full max-w-[1000px] rounded-2xl shadow-2xl overflow-hidden flex'>
        {/* Image side */}
        <div className='hidden md:block relative w-1/2'>
          <Image
            src={premium_photo}
            alt='a team of doctors'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-[#9871FF]/40' />
          <div className='absolute bottom-10 left-10 right-10 text-white'>
            <h2 className='text-3xl font-bold'>Your health, one appointment away</h2>
            <p className='mt-2'>Log in to book doctors, manage visits and consult online.</p>
          </div>
        </div>

        {/* Form side */}
        <div className='w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center'>
          <Link href='/' className='text-[#9871FF] font-bold text-xl mb-8'>
            Accexx247
          </Link>
          <h1 className='text-3xl font-bold text-[#1a1a1a]'>Welcome back</h1>
          <p className='text-gray-600 mt-2'>Log in to your account to continue.</p>

          <form onSubmit={handleSubmit} className='mt-8 flex flex-col gap-5'>
            <div className='flex flex-col gap-1'>
              <label htmlFor='email' className='text-gray-600 text-sm'>Email address</label>
              <input
                id='email'
                type='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='you@example.com'
                className='px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#9871FF]'
              />
            </div>

            <div className='flex flex-col gap-1'>
              <div className='flex justify-between items-center'>
                <label htmlFor='password' className='text-gray-600 text-sm'>Password</label>
                <Link href='/auth/forgot-password' className='text-sm text-[#9871FF] font-bold'>
                  Forgot password?
                </Link>
              </div>
              <div className='relative'>
                <input
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Enter your password'
                  className='w-full px-4 py-3 pr-16 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#9871FF]'
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

            {error && <p className='text-red-600 text-sm'>{error}</p>}

            <button
              type='submit'
              disabled={loading}
              className='bg-[#9871FF] text-white rounded-2xl h-[50px] font-bold disabled:opacity-60'
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className='text-gray-600 mt-6 text-center'>
            Don't have an account?
            <Link href='/register' className='text-[#9871FF] font-bold'>
              Register
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}

export default LoginPage