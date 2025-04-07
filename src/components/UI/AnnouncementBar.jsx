import React from 'react'
import { NavLink } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const AnnouncementBar = () => {
    return (
        <div className='bg-black flex w-full items-center justify-center py-2 gap-4'>
            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <NavLink to='products' className='underline flex items-center justify-center'>ShopNow <IoIosArrowForward/></NavLink>
        </div>
    )
}

export default AnnouncementBar
