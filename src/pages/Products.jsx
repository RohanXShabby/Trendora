import React from 'react'
import ProductCardContainer from '../components/containers/ProductCardContainer';
import FilterSection from "../components/UI/Filters";

const Products = () => {
    const filtersData = [
        {
            title: "Category",
            options: ["Audio", "Gaming", "Mobile", "TV", 'Laptop', 'Appliances'],
        },
        {
            title: "Closure Type",
            options: ["Slip On", "Zipper", "Strap", "Toggle"],
        },
    ];

    return (
        <div className=' grid grid-cols-4  px-32 '>
            <div className='col-span-1 py-8 border-r border-gray-500'>
                <h2 className='font-bold text-2xl px-3 pb-4'>Filters</h2>
                <FilterSection filters={filtersData} />
            </div>
            <div className='col-span-3 py-8 px-4'>
                <h2 className='font-bold text-2xl px-3 pb-4'>Products</h2>
                <ProductCardContainer />
            </div>
        </div>
    )
}

export default Products




