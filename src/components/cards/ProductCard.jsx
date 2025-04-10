import React, { useState, useRef } from 'react'
import { FaStar } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import Redbutton from '../UI/RedButton'
import { useContext } from 'react';
import AppContext from '../../context/Context';
import useWishlist from "../../hooks/useWishlist"
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";


const ProductCard = ({ item }) => {


    const [selectedSize, setSelectedSize] = useState("M");
    const [quantity, setQuantity] = useState(0);
    const [cartItems, setCartItems] = useState([])

    const cartValue = useContext(AppContext)

    const increment = () => {
        setQuantity((q) => q + 1);
        cartValue.increment()
    };
    const decrement = () => {
        setQuantity((q) => (q > 0 ? q - 1 : 1))
        cartValue.decrement()
    };

    const { isInWishlist, toggleWishlist } = useWishlist();
    const inWishlist = isInWishlist(item.id);

    if (item.image) {
        return (
            <div className={`hover:shadow-2xl rounded-lg overflow-hidden hover:shadow-gray-300/10 duration-300 ${item.className}`} >
                <div className='group relative'>
                    <NavLink to={`/products/${item.id}`} >
                        <img className='aspect-square bg-white object-center object-contain ' src={item.image} alt={item.title} />
                    </NavLink>
                    <div className={`absolute top-4 z-50 group-hover:block ${inWishlist ? 'block' : 'hidden'} right-4 text-2xl text-red-200 `}>
                        <button
                            onClick={() => toggleWishlist(item)}
                            className="text-red-200"
                        >
                            {inWishlist ? <FaHeart className='scale-100 duration-200' /> : <FaRegHeart className='scale-100' />}
                        </button>
                    </div>
                </div>
                <div className='flex flex-col gap-2 h-48px py-3 px-1'>
                    <div className='line-clamp-2 md:line-clamp-1'>
                        <NavLink to={`/products/${item.id}`}>{item.title}</NavLink>
                    </div>
                    <div className='flex items-start  md:items-center flex-col md:flex-row gap-1 md:gap-2 '>
                        <span className='text-red-200'> ${item.price}</span>
                        <span className='flex items-center justify-center'>
                            {[...Array(5)].map((_, i) => {
                                return <span key={i}  >
                                    <FaStar className='text-yellow-500' />
                                </span>
                            })}
                            <span className='text-gray-300'>(99)</span>
                        </span>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 justify-between '>
                        <Redbutton text='Buy Now' to={`/products/${item.id}`} className={`whitespace-nowrap text-sm rounded-sm`} />
                        {quantity === 0 ? <Redbutton text='Add to Cart' onClick={() => increment()} className={` whitespace-nowrap text-sm rounded-sm`} /> : <div className="flex border rounded overflow-hidden">
                            <button
                                onClick={decrement}
                                className="flex items-center justify-center w-full text-lg font-semibold border-r"
                            >
                                −
                            </button>
                            <span className="flex items-center justify-center w-full py-1 text-lg">{quantity}</span>
                            <button
                                onClick={increment}
                                className="flex items-center justify-center w-full text-lg font-semibold border-l bg-red-500 text-white"
                            >
                                +
                            </button>
                        </div>}
                    </div>
                </div>
            </div >
        )
    }
}

export default ProductCard
