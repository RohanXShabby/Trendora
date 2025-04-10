import React from 'react'
import { NavLink } from 'react-router-dom'

const RedButton = ({ text, className, to, onClick }) => {
    return (
        <NavLink to={to} onClick={onClick} className={`bg-red-200 flex justify-center whitespace-nowrap hover:bg-red-100 cursor-pointer px-3 py-2 rounded-2xl duration-300 ${className}`} >
            {text}
        </NavLink >
    )
}

export default RedButton
