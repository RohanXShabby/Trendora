import React, { useContext, useState, useEffect } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import ProductCard from '../components/cards/ProductCard'
import { FaStar } from "react-icons/fa6";
import getProduct from '../api/getProduct';
import { FaRegHeart } from "react-icons/fa";
import AppContext from '../context/Context';
import { FaTruck, FaUndoAlt } from "react-icons/fa";
import Heading from '../components/UI/Heading';

const SingleProduct = () => {
    let item = useLoaderData();
    const [selectedColor, setSelectedColor] = useState("green");

    const colors = [
        { name: "green", class: "bg-green-500" },
        { name: "red", class: "bg-red-500" },
    ];
    const [product, setProduct] = useState([])

    useEffect(() => {
        getProduct().then(
            (data) => {
                setProduct(data)
            }
        ).catch((err) => {
            throw new Error({ err })
        })
    }, [])

    const [selectedSize, setSelectedSize] = useState("M");
    const [quantity, setQuantity] = useState(0);

    const sizes = ["XS", "S", "M", "L", "XL"];

    const cartValue = useContext(AppContext)

    const increment = () => {
        setQuantity((q) => q + 1);
        cartValue.increment()
    };
    const decrement = () => {
        setQuantity((q) => (q > 1 ? q - 1 : 1))
        cartValue.decrement()
    };
    const no = Math.ceil(Math.random() * 130)

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 px-32 py-16 gap-16'>
                <div>
                    <img src={item.image} alt="" />
                </div>
                <div className='flex flex-col gap-4 py-4 '>
                    <h1 className='text-4xl'>{item.title}</h1>
                    <div className='flex gap-4 items-center'>
                        <span className='flex'>
                            {[...Array(5)].map((_, i) => {
                                return <span key={i} >
                                    <FaStar className='text-yellow-500' />
                                </span>
                            })}
                        </span>
                        <span className='text-gray-400'>(99) Reviews</span>
                        <span className=' border-l px-4 border-l-gray-300 text-green-500'>In Stocks</span>
                    </div>
                    <div className='text-3xl'>${item.price}</div>
                    <p className='text-sm font-light border-b pb-8'>{item.description}</p>
                    <div className='flex flex-col gap-8'>
                        {/* Color Selector */}
                        <div className="flex items-center gap-4 ">
                            <span className="text-2xl">Colours:</span>
                            {colors.map((color) => (
                                <label key={color.name} className="relative">
                                    <input
                                        type="radio"
                                        name="color"
                                        value={color.name}
                                        checked={selectedColor === color.name}
                                        onChange={() => setSelectedColor(color.name)}
                                        className="sr-only"
                                    />
                                    <span
                                        className={`w-5 h-5 rounded-full border-2 border-black inline-block cursor-pointer transition-all duration-200 ${color.class} ${selectedColor === color.name ? "ring-2 ring-white" : ""}`}
                                    ></span>
                                </label>
                            ))}
                        </div>
                        {/* Size Selector */}
                        <div className="flex items-center gap-4">
                            <span className="font-medium">Size:</span>
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-3 py-1 border rounded cursor-pointer ${selectedSize === size
                                        ? "bg-red-500 text-white"
                                        : "bg-gray-800 text-white hover:bg-gray-900"
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                        {/* Add to card or Buy Now */}
                        <div className="space-y-4 ">

                            {/* Quantity + Buy Section */}
                            <div className="flex items-center gap-4">
                                {/* Quantity Control */}
                                <div className="flex border rounded overflow-hidden">
                                    <button
                                        onClick={decrement}
                                        className="px-3 text-lg font-semibold border-r"
                                    >
                                        −
                                    </button>
                                    <span className="px-4 py-1 text-lg">{quantity}</span>
                                    <button
                                        onClick={increment}
                                        className="px-3 text-lg font-semibold border-l bg-red-500 text-white"
                                    >
                                        +
                                    </button>
                                </div>

                                {/* Buy Now Button */}
                                <button className="bg-red-500 text-white px-5 py-2 rounded">
                                    Buy Now
                                </button>

                                {/* Wishlist Icon */}
                                <button className="border rounded cursor-pointer p-2 hover:bg-gray-900">
                                    <FaRegHeart />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  w-full gap-16 py-16 rounded-2xl px-32">
                {/* Free Delivery */}
                <div className="flex border  border-gray-400 rounded-2xl items-start space-x-4 p-4">
                    <FaTruck className="text-2xl mt-1" />
                    <div>
                        <h3 className="font-semibold">Free Delivery</h3>
                        <p>
                            <Link href="#" className="underline">
                                Enter your postal code for Delivery Availability
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Return Delivery */}
                <div className="flex border font-light border-gray-400 rounded-2xl items-start space-x-4 p-4">
                    <FaUndoAlt className="text-2xl mt-1" />
                    <div>
                        <h3 className="font-semibold">Return Delivery</h3>
                        <p>
                            Free 30 Days Delivery Returns.{" "}
                            <Link href="#" className="underline">
                                Details
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <Heading subHeading='Related Items' />
            <div className='px-32 grid grid-cols-5 gap-8 pb-20'>
                {product.slice(no, no + 5).map((e) => {
                    return <ProductCard key={e.id}
                        id={e.id} title={e.title} image={e.image} price={e.price} description={e.description} brand={e.brand} model={e.model}
                        color={e.color} category={e.category} discount={e.discount} rating={5}
                    />
                })}
            </div>
        </>
    )
}

export default SingleProduct
