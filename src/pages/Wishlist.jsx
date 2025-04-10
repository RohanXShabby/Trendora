import React, { useEffect, useState } from 'react'
import useWishlist from '../hooks/useWishlist'
import ProductCard from '../components/cards/ProductCard';
import RedButton from '../components/UI/RedButton';
import getProduct from '../api/getProduct';
import Heading from '../components/UI/Heading';

const Wishlist = () => {
  const stored = localStorage.getItem("wishlist");
  const products = JSON.parse(stored)
  const [product, setProduct] = useState([])
  const [randomNum] = useState(() => Math.ceil(Math.random() * 140));



  const { isInWishlist } = useWishlist()

  useEffect(() => {
    getProduct().then(
      (data) => {
        setProduct(data)
      }
    ).catch((err) => {
      throw new Error({ err })
    })
  }, [isInWishlist]);

  const wishlistIds = products.map(item => item.id)
  console.log(wishlistIds)

  return (
    <div className='min-h-screen py-8 pb-20'>
      <div>
        <div className='px-32 py-0'>
          <Heading subHeading='Wishlist' h1='Products' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 px-32 '>
          {products.length > 0 ? products.map((item) => {
            return <ProductCard key={item.id}
              item={item}
            />
          }) : <span className='text-red-200'>No Product In Your WishList!</span>
          }
        </div>
      </div>
      <div >
        <div className='px-32'>
          <Heading subHeading='Products' h1='Just For You' />
        </div>
        <div className='flex flex-col gap-8 '>
          <div className='px-32 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-8'>
            {product && product.slice(randomNum, randomNum + 5).filter((item) => !wishlistIds.includes(item.id)).map((item) => {
              return <ProductCard key={item.id}
                item={item}
              />
            })}
          </div>
          <div className='flex justify-center'>
            <RedButton text='View All Products' to='/products' className='rounded-sm' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wishlist
