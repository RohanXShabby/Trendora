import React from 'react'
import { MdOutlineArrowForwardIos } from "react-icons/md";

const OfferBanner = () => {

    const categories = [
        { name: "Woman’s Fashion", hasSubmenu: true },
        { name: "Men’s Fashion", hasSubmenu: true },
        { name: "Electronics", hasSubmenu: false },
        { name: "Home & Lifestyle", hasSubmenu: false },
        { name: "Medicine", hasSubmenu: false },
        { name: "Sports & Outdoor", hasSubmenu: false },
        { name: "Baby’s & Toys", hasSubmenu: false },
        { name: "Groceries & Pets", hasSubmenu: false },
        { name: "Health & Beauty", hasSubmenu: false },
    ];




    return (
        <div className='hidden md:flex px-32 w-full gap-16'>
            <div className='w-1/5 py-4 flex flex-col gap-2'>
                {categories.map((e, index) => {
                    return <li key={index} className='cursor-pointer hover:text-gray-400 duration-200 list-none flex items-center justify-between'>{e.name}
                        {e.hasSubmenu && <MdOutlineArrowForwardIos className='text-white)' />}
                    </li>
                })}
            </div>
            <div className='w-4/5 py-4 flex justify-center border-l border-gray-500 h-70 ' >
                <img src='Top Banner.png' alt="Offer Banner" />
            </div>

        </div>
    )
}

export default OfferBanner
