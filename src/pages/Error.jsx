import React from 'react'
import Navbar from '../components/UI/Navbar'
import Footer from '../components/UI/Footer'
import { NavLink } from 'react-router-dom'
import RedButton from '../components/UI/RedButton'

const Error = () => {
    return (
        <>
            <div className='min-h-screen flex flex-col justify-between bg-gray-800 text-white '>
                <Navbar />
                <div className='h-full w-full flex gap-6 flex-col items-center justify-center text-6xl'>
                    <div>
                        404 Page Not Found....!
                    </div>
                    <p className='text-lg'>Your visited page not found. You may go home page.</p>
                    <RedButton to='/' text="Back To Home" className='text-xl' />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Error
