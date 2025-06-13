import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCardContainer from '../components/containers/ProductCardContainer';
import FilterSection from "../components/UI/Filters";
import { FaFilter } from "react-icons/fa";

const Products = () => {
    const [searchParams] = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState({});
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    useEffect(() => {
        const category = searchParams.get('category');
        if (category) {
            setSelectedCategory(category.toLowerCase());
        }
    }, [searchParams]);

    const handleFilterChange = (newFilters) => {
        setSelectedFilters(newFilters);
    };

    const filtersData = [
        {
            title: "Category",
            options: ["Mobile", "Audio", "Gaming", "TV", "Laptop", "Appliances"],
        },
        {
            title: "Brand",
            options: ["Samsung", "Apple", "Sony", "LG", "Bose", "JBL", "Xiaomi", "Microsoft", "Logitech", "Urbanista"],
        },
        {
            title: "Color",
            options: ["Burgundy", "Black", "White", "Gray", "Blue", "Silver", "Gold", "Purple", "Green", "Sand Gold"],
        },
        {
            title: "Price Range",
            options: ["Under $500", "$500 - $1000", "$1000 - $1500", "Above $1500"],
        },
        {
            title: "Availability",
            options: ["On Sale", "In Stock"],
        }
    ];

    return (
        <div className="min-h-screen bg-gray-800 text-white">
            {/* Mobile Filter Button */}
            <div className="md:hidden sticky top-0 z-40 bg-gray-800 border-b border-gray-700 px-4 py-3">
                <button
                    className="flex items-center justify-center gap-2 w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                    onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                >
                    <FaFilter />
                    <span>Filters</span>
                </button>
            </div>

            {/* Mobile Filter Modal */}
            {isMobileFilterOpen && (
                <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
                    <div className="bg-gray-800 h-full w-3/4 max-w-sm p-4 overflow-y-auto">
                        <div className="flex justify-between items-center mb-4 sticky top-0 bg-gray-800 py-2">
                            <h3 className="font-bold text-lg">Filters</h3>
                            <button
                                onClick={() => setIsMobileFilterOpen(false)}
                                className="text-white hover:text-red-200 p-2"
                            >
                                ✕
                            </button>
                        </div>
                        <FilterSection
                            filters={filtersData}
                            onFilterChange={handleFilterChange}
                            selectedFilters={selectedFilters}
                        />
                    </div>
                </div>
            )}

            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex flex-col md:flex-row gap-8 py-4 md:py-8">
                    {/* Filters Sidebar */}
                    <div className="w-full md:w-64 lg:w-72 md:sticky md:top-4 md:self-start">
                        <div className="hidden md:block">
                            <FilterSection
                                filters={filtersData}
                                onFilterChange={handleFilterChange}
                                selectedFilters={selectedFilters}
                            />
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="flex-1">
                        <h2 className="font-bold text-2xl mb-6 sticky top-0 bg-gray-800 py-4 md:py-6 z-30">
                            {selectedCategory
                                ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Products`
                                : 'All Products'}
                        </h2>
                        <ProductCardContainer
                            selectedCategory={selectedCategory}
                            selectedFilters={selectedFilters}
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;




