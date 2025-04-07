import React from 'react'
import { Outlet, useNavigate, useNavigation } from 'react-router-dom'
import Navbar from '../UI/Navbar'
import Footer from '../UI/Footer'
import AnnouncementBar from '../UI/AnnouncementBar'
import { MoonLoader } from 'react-spinners'

const AppLayout = () => {
    let navigate = useNavigation()

    if (navigate.state === 'loading') {
        return <>
            <div className='min-h-screen overflow-visible flex flex-col justify-between bg-gray-800 text-white  ' >
                <div >
                    <AnnouncementBar />
                    <Navbar />
                </div>
                <div className='flex items-center justify-center w-full h-full '>
                    <MoonLoader
                        color="#DB4444"
                        size={120}
                        speedMultiplier={0.6}
                    />
                </div>
                <Footer />
            </div >
        </>
    } else {
        return <>
            <div className='m-0 p-0 min-h-screen w-full bg-gray-800 text-white  ' >
                <div className='overflow-visible'>
                    <AnnouncementBar />
                    <Navbar />
                </div>
                <Outlet />
                <Footer />
            </div >
        </>
    }
};

export default AppLayout