import React, { useEffect, useState } from 'react'
import ProductCard from '../cards/ProductCard';
import getProduct from '../../api/getProduct';

const ProductCardContainer = ({ className }) => {
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

    const excludedIds = [8, 14, 16, 17, 27];


    const PAGE_SIZE = [...Array((Math.ceil(product.length / 10)))]
    const [currentPage, setCurrentPage] = useState(1)

    let pageStart = (currentPage === 1) ? currentPage : currentPage * 9

    let pageEnd = pageStart + 9

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <div className={`grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-4 lg:gap-16 px-3 py-2 ${className}`}>
                {product
                    .filter((item) => !excludedIds.includes(item.id))
                    .slice(pageStart, pageEnd).map((item) => {
                        console.log(item)
                        return <ProductCard key={item.id}
                            item={item}
                        />
                    })}
            </div>
            {product &&
                <div className='min-w-96 flex justify-between items-center py-4  h-18 w-full'>
                    <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} className={`bg-red-200 flex justify-center whitespace-nowrap hover:bg-red-100 cursor-pointer px-3 py-2  duration-300 rounded-sm`}>
                        Next
                    </button>
                    {PAGE_SIZE.map((_, index) => {
                        return <span
                            key={index}
                            className={`border w-8 h-8 flex items-center justify-center rounded-md cursor-pointer hover:bg-red-200 duration-200 ${(currentPage == index + 1) ? "bg-red-200" : ''} `}
                            onClick={() => {
                                setCurrentPage(index + 1)
                                scrollToTop()
                            }}
                        >
                            {index + 1}
                        </span>
                    })}
                    <button
                        disabled={currentPage === PAGE_SIZE.length}
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className={`bg-red-200 flex justify-center whitespace-nowrap hover:bg-red-100 cursor-pointer px-3 py-2  duration-300 rounded-sm`}>
                        Next
                    </button >
                </div >
            }
        </>
    )
}

export default ProductCardContainer
