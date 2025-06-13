import React from "react";
import {
    FaHeadphones,
    FaGamepad,
    FaMobileAlt,
    FaTv,
    FaLaptop,
    FaBlender,
} from "react-icons/fa";

const categories = [
    { name: "Audio", icon: <FaHeadphones /> },
    { name: "Gaming", icon: <FaGamepad /> },
    { name: "Mobile", icon: <FaMobileAlt /> },
    { name: "TV", icon: <FaTv /> },
    { name: "Laptop", icon: <FaLaptop /> },
    { name: "Appliances", icon: <FaBlender /> },
];

const CategoryCards = ({ onCategorySelect }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4 px-4 md:px-16 lg:px-32">
            {categories.map((cat, index) => (
                <button
                    key={index}
                    className="border flex flex-col w-full items-center justify-center py-6 rounded-2xl hover:bg-red-200 duration-200 focus:bg-red-300 bg-gray-800 text-white"
                    onClick={() => onCategorySelect && onCategorySelect(cat.name)}
                >
                    <div className="text-4xl md:text-5xl lg:text-6xl mb-2">
                        {cat.icon}
                    </div>
                    <div className="text-xs md:text-sm font-medium">{cat.name}</div>
                </button>
            ))}
        </div>
    );
};

export default CategoryCards;
