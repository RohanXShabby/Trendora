import React from 'react'

const Heading = ({ subHeading, h1 }) => {
    return (
        <div className=' flex flex-col gap-2  py-8'>
            <span className='px-4 border-l-16 text-lg text-red-200 font-semibold border-red-200'>{subHeading}</span>
            <span className='font-bold text-2xl'>{h1}</span>
        </div>
    )
}

export default Heading
