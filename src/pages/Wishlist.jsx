import React from 'react'
import useWishlist from '../hooks/useWishlist'

const Wishlist = () => {
    const { Wishlist } = useWishlist()
    console.log(Wishlist)

    return (
        <div className='min-h-screen text-8xl flex items-center justify-center'>
          hi
        </div>
    )
}

export default Wishlist
