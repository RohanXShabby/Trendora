import React from "react";
import {
    FaMobileAlt,
    FaLaptop,
    FaCamera,
    FaHeadphones,
    FaGamepad,
} from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { BsSmartwatch } from "react-icons/bs";
import { Link } from "react-router-dom";

const categories = [
    { name: "Phones", icon: <FaMobileAlt /> },
    { name: "Computers", icon: <FaLaptop /> },
    { name: "SmartWatch", icon: <BsSmartwatch /> },
    { name: "Camera", icon: <FaCamera /> },
    { name: "HeadPhones", icon: <FaHeadphones /> },
    { name: "Gaming", icon: <IoGameController /> },
];

const CategoryCards = () => {
    return (
        <div className="grid lg:grid-cols-6 items-center gap-4  md:grid-cols-3 grid-cols-3 space-x-4 p-4 px-32">
            {categories.map((cat, index) => (
                <Link to='products'
                    key={index}
                    className="border flex flex-col w-full items-center justify-center py-6 rounded-2xl hover:bg-red-200  duration-200"
                >
                    <div className="text-6xl mb-2">{cat.icon}</div>
                    <div className="text-sm font-medium">{cat.name}</div>
                </Link>
            ))}
        </div>
    );
};

export default CategoryCards;
