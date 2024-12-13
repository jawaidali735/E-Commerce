import React from 'react'
import Link from 'next/link'
import Logos from '@/components/Logos'
import PageHeader from '@/components/PageHeader'

const Login = () => {
  return (
    <section>
      <PageHeader heading='My Account' />
      <div className='w-full max-w-[90%] sm:max-w-[544px] h-auto sm:h-[474px] shadow-custom border-1 p-4 sm:p-6 mx-auto mb-4 border-[#C2C5E1]'>
        <div className='text-center'>
          <h1 className='text-[#000000] mt-4 text-lg sm:text-2xl sm:text-[32px] font-bold font-josefin'>
            Login
          </h1>
          <p className='font-lato text-[#9096B2] text-xs sm:text-sm sm:text-[17px]'>
            Please login using account detail below.
          </p>
          <div className='space-y-4 sm:space-y-6 mt-4 sm:mt-6'>
            <input
              type='email'
              placeholder='Email Address'
              className='p-3 sm:p-4 w-full sm:w-[432px] h-[48px] sm:h-[52px] outline-none border border-[#C2C5E1] rounded-[2px]'
            />
            <input
              type='text'
              placeholder='Password'
              className='p-3 sm:p-4 w-full sm:w-[432px] h-[48px] sm:h-[52px] outline-none border border-[#C2C5E1] rounded-[2px]'
            />
          </div>
          <p className='text-left mt-3 text-[#9096B2] font-lato text-xs sm:text-[17px] sm:ml-[30px]'>
            Forgot your password?
          </p>
          <button className='bg-[#FB2E86] mt-5 w-full sm:w-[432px] h-[45px] sm:h-[47px] text-sm sm:text-[17px] text-white font-lato border-none'>
            Sign In
          </button>
          <p className='font-lato text-[#9096B2] text-xs sm:text-[17px] mt-8 sm:mt-8 mb-4'>
          Don&apos;t have an Account?{' '}
            <Link href='/' className='hover:underline'>
              Create account
            </Link>
          </p>
        </div>
      </div>
      <Logos />
    </section>
  )
}

export default Login
