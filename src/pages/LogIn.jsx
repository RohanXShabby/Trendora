import React from 'react'
import { Link } from 'react-router-dom'
import RedButton from '../components/UI/RedButton'

const LogIn = () => {
    return (
        <div className='flex justify-between items-center py-10 pb-30'>
            <div className='w-1/2'>
                <img src="./SugnUp.png" alt="" />
            </div>
            <div className='flex flex-col gap-8 pr-32'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-6xl'>Log in to Exclusive</h1>
                    <p className='text-xl'>Enter your details below</p>
                </div>
                <div className='flex flex-col'>
                    <input className='border-b border-gray-600 py-4 px-2 outline-0 ' type="email" placeholder='Email' />
                    <input className='border-b border-gray-600 py-4 px-2 outline-0 ' type="password" placeholder='Password' />
                </div>
                <div className='flex items-center justify-between gap-4 '>
                    <RedButton text='Create Account' className='rounded-md py-4 w-1/2' />
                    <Link to='/login' className='text-red-200 w-1/2 pl-10' >Forget Password?</Link>
                </div>
            </div>
        </div>
    )
}

export default LogIn
