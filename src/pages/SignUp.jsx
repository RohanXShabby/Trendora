import React from 'react'
import RedButton from '../components/UI/RedButton'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className='flex justify-between items-center py-10 pb-30'>
            <div className='w-1/2'>
                <img src="./SugnUp.png" alt="" />
            </div>
            <div className='flex flex-col gap-8 pr-32'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-6xl'>Create an account</h1>
                    <p className='text-xl'>Enter Your details below</p>
                </div>
                <div className='flex flex-col'>
                    <input className='border-b border-gray-600 py-4 px-2 outline-0 ' type="text" placeholder='Name' />
                    <input className='border-b border-gray-600 py-4 px-2 outline-0 ' type="email" placeholder='Email' />
                    <input className='border-b border-gray-600 py-4 px-2 outline-0 ' type="password" placeholder='Password' />
                </div>
                <div className='flex flex-col items-center justify-center gap-4 '>
                    <RedButton text='Create Account' className='rounded-md py-4 w-full' />
                    <button className='flex items-center justify-center gap-2 border  w-full py-3 rounded-md cursor-pointer hover:bg-black/40 duration-200'> <span><img className='h-8 w-8' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" /></span> Sign Up With Google</button>

                </div> <div className='flex text-gray-400 justify-center gap-4'>
                    Already have account? <Link to='/login' className='underline text-red-200' >Log In</Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp
