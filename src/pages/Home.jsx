import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import OfferBanner from '../components/UI/OfferBanner'
import Banner from '../components/UI/Banner'
import Heading from '../components/UI/Heading';
import getProduct from '../api/getProduct';
import ProductCard from '../components/cards/ProductCard'
import RedButton from '../components/UI/RedButton'
import CategoryCards from '../components/UI/Categories';
import CountdownTimer from '../components/UI/CountDownTimer';
import ServiceFeatures from '../components/UI/ServiceFeature';

const Home = () => {
    const navigate = useNavigate();
    const [no] = useState(() => Math.ceil(Math.random() * 140));
    const [no2] = useState(() => Math.ceil(Math.random() * 140));
    const [no3] = useState(() => Math.ceil(Math.random() * 140));
    const [product, setProduct] = useState([])
    const [productCount, setProductCount] = useState(5)
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setProductCount(5);
            } else if (window.innerWidth >= 768) {
                setProductCount(6);
            } else {
                setProductCount(4);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setLoading(true);
        setError(null);
        getProduct().then(
            (data) => {
                setProduct(data);
                setLoading(false);
            }
        ).catch((err) => {
            setError('Failed to fetch products. Please try again.');
            setLoading(false);
        })
    }, [])

    // Map UI category names to API category values
    const categoryMap = {
        "Audio": "audio",
        "Gaming": "gaming",
        "Mobile": "mobile",
        "TV": "tv",
        "Laptop": "laptop",
        "Appliances": "appliances"
    };
    // Filter products by selected category
    const filteredProducts = selectedCategory
        ? product.filter((item) => item.category && item.category.toLowerCase() === categoryMap[selectedCategory]?.toLowerCase())
        : product;

    const handleCategorySelect = (category) => {
        navigate(`/products?category=${category.toLowerCase()}`);
    };

    return (
        <>
            {loading && (
                <div className="w-full flex justify-center items-center py-16">
                    <span className="text-xl text-gray-400 animate-pulse">Loading products...</span>
                </div>
            )}
            {error && (
                <div className="w-full flex justify-center items-center py-16">
                    <span className="text-xl text-red-400">{error}</span>
                </div>
            )}
            {!loading && !error && (
                <>
                    <OfferBanner />
                    <div className='block md:hidden'>
                        <div className='px-32'>
                            <Heading subHeading="Categories" h1='Browse By Category' />
                        </div>
                        <CategoryCards onCategorySelect={handleCategorySelect} />
                    </div>
                    <div className='flex  px-32 md:gap-32 gap-2 items-center'>
                        <Heading subHeading="Today's" h1='Flash Sales' />
                        <CountdownTimer targetDate="2026-04-10T23:59:59" />
                    </div>
                    <div className='flex flex-col gap-8 '>
                        <div className='px-32 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-8'>
                            {filteredProducts.slice(no, no + productCount).map((item) => {
                                return <ProductCard key={item.id}
                                    item={item}
                                />
                            })}
                        </div>
                        <div className='flex justify-center'>
                            <RedButton text='View All Products' to='/products' className='rounded-sm' />
                        </div>
                    </div>
                    <div className='hidden md:block '>
                        <div className='px-32'>
                            <Heading subHeading="Categories" h1='Browse By Category' />
                        </div>
                        <CategoryCards onCategorySelect={handleCategorySelect} />
                    </div>
                    <div className='flex justify-between items-center px-32'>
                        <Heading subHeading="This Months" h1='Best Selling Products' />
                        <RedButton text='View All' to='products' className='h-fit rounded-sm text-2xl' />
                    </div>
                    <div className='flex flex-col gap-8 py-4'>
                        <div className='px-32 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
                            {filteredProducts.slice(no2, no2 + productCount).map((item) => {
                                return <ProductCard key={item.id}
                                    item={item}
                                />
                            })}
                        </div>
                    </div>
                    <Banner />
                    <div className='px-32'>
                        <Heading subHeading="Our Product's" h1='Explore Our Products' />
                    </div>
                    <div className='flex flex-col gap-8 py-4'>
                        <div className='px-32 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                            {filteredProducts.slice(no3, no3 + 8).map((item) => {
                                return <ProductCard key={item.id}
                                    item={item}
                                />
                            })}
                        </div>
                        <div className='flex justify-center'>
                            <RedButton text='View All Products' to='/products' className='rounded-sm' />
                        </div>
                    </div>
                    <ServiceFeatures />
                </>
            )}
        </>
    )
}

export default Home
