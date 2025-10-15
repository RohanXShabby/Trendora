import React, { useContext, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { CartCountContext } from '../../context/Context';
import WishlistContext from '../../context/WishlistContext';
import { LuChartNoAxesColumnDecreasing } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [mobileSearchQuery, setMobileSearchQuery] = useState('');

    const navLinks = [
        {
            path: "/",
            li: "Home"
        },
        {
            path: "products",
            li: "Products"
        },
        {
            path: "contact",
            li: "Contact Us"
        },
        {
            path: "about",
            li: "About Us"
        },

    ]
    const navigate = useNavigate();

    const handleWishlistClick = () => {
        navigate('/wishlist')
    }
    const handleCartClick = () => {
        navigate('/cart')
    }

    const handleSignUpClick = () => {
        navigate('/signup')
    }

    const handleSearch = (query) => {
        if (query.trim()) {
            navigate(`/products?search=${encodeURIComponent(query.trim())}`);
            setSearchQuery('');
            setMobileSearchQuery('');
        }
    };

    const handleDesktopSearch = () => {
        handleSearch(searchQuery);
    };

    const handleMobileSearch = () => {
        handleSearch(mobileSearchQuery);
    };

    const handleKeyPress = (e, query, setQuery) => {
        if (e.key === 'Enter') {
            handleSearch(query);
        }
    };

    const { cartCount } = useContext(CartCountContext);
    const { wishlist } = useContext(WishlistContext);

    let SliderRef = useRef()

    const menuOpen = () => {
        SliderRef.current.style.left = '-50px'
    }

    const menuClose = () => {
        SliderRef.current.style.left = '-100vw'
        console.log('menu closed')
    }



    return (
        <>
            <nav className='flex w-full border-b border-gray-500 justify-between items-center bg-gray-800 text-white py-2 px-32' >
                <div className='relative'>
                    <LuChartNoAxesColumnDecreasing onClick={() => { menuOpen() }} className='lg:hidden font-semibold text-5xl rotate-90 cursor-pointer' />
                    <div ref={SliderRef} className='flex top-0 bg-gray-800 h-screen duration-200 absolute -left-96 lg:static lg:justify-between pr-8 gap-4 lg:items-center flex-col lg:flex-row lg:h-fit w-fit pb-8 lg:pb-0 pl-32 lg:pl-0'>
                        <NavLink to='/' className='font-semibold text-4xl flex items-center gap-4 justify-between w-fit lg:pb-0 pb-4 cursor-pointer '>Trendora
                            <span>
                                <RxCross2 onClick={() => { menuClose() }} className='lg:hidden' />
                            </span>
                        </NavLink>
                        <div className='flex gap-8 flex-col lg:flex-row lg:items-center'>
                            {navLinks.map((e, index) => {
                                return <NavLink key={index} onClick={menuClose} className={({ isActive }) => isActive ? 'text-red-200 font-semibold whitespace-nowrap' : 'font-semibold whitespace-nowrap'} to={e.path}>{e.li}</NavLink>
                            })}
                        </div>
                    </div>
                </div>
                <div className='flex items-center  gap-6 font-2xl '>
                    <div className='hidden h-full lg:flex items-center'>
                        <input
                            className='w-[12rem]  bg-gray-500 p-3 outline-0'
                            type="text"
                            placeholder='Search Product...'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyPress={(e) => handleKeyPress(e, searchQuery, setSearchQuery)}
                        />
                        <button
                            className='font-3xl bg-gray-500'
                            onClick={handleDesktopSearch}
                        >
                            <IoMdSearch className='text-5xl w-10 rounded-br-2xl cursor-pointer rounded-tr-2xl' />
                        </button>
                    </div>
                    <div onClick={handleWishlistClick} className='flex items-center relative cursor-pointer'>
                        <FaRegHeart className='text-3xl' />
                        <span className='absolute -right-4 -top-2 rounded-full bg-red-200 px-2'>
                            {wishlist?.length || 0}
                        </span>
                    </div>
                    <div onClick={handleCartClick} className='flex items-center relative cursor-pointer'>
                        <FiShoppingCart className='text-3xl ' />
                        <span className='absolute -right-4 -top-2 rounded-full bg-red-200 px-2' >
                            {cartCount || 0}
                        </span>
                    </div>
                    <FiUser onClick={handleSignUpClick} className='text-3xl  cursor-pointer' />
                </div>
            </nav>
            <div className='flex h-full lg:hidden w-screen items-center px-32'>
                <input
                    className=' bg-gray-500 w-full  p-3 outline-0'
                    type="text"
                    placeholder='Search Product...'
                    value={mobileSearchQuery}
                    onChange={(e) => setMobileSearchQuery(e.target.value)}
                    onKeyPress={(e) => handleKeyPress(e, mobileSearchQuery, setMobileSearchQuery)}
                />
                <button
                    className='font-3xl bg-gray-500'
                    onClick={handleMobileSearch}
                >
                    <IoMdSearch className='text-5xl w-10 rounded-br-2xl cursor-pointer rounded-tr-2xl' />
                </button>
            </div>
        </>
    )
}

export default Navbar
