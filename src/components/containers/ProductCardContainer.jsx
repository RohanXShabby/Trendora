import React, { useEffect, useState } from 'react';
import ProductCard from '../cards/ProductCard';
import getProduct from '../../api/getProduct';

const ProductCardContainer = ({ className }) => {
    const [product, setProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;
    const excludedIds = [8, 14, 16, 17, 27];

    useEffect(() => {
        getProduct()
            .then((data) => setProduct(data))
            .catch((err) => console.error("Failed to load products:", err));
    }, []);

    const filteredProducts = product.filter(item => !excludedIds.includes(item.id));
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const currentProducts = filteredProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const getPageNumbers = () => {
        const visiblePages = 5;
        let start = Math.max(1, currentPage - Math.floor(visiblePages / 2));
        let end = Math.min(totalPages, start + visiblePages - 1);

        if (end - start + 1 < visiblePages) {
            start = Math.max(1, end - visiblePages + 1);
        }

        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    return (
        <div className={`${className} px-4 py-4`}>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {currentProducts.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-8 flex flex-wrap justify-center items-center gap-2 text-sm">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => {
                            setCurrentPage(currentPage - 1);
                            scrollToTop();
                        }}
                        className={`px-4 py-2 rounded-md border ${currentPage === 1
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : 'bg-red-500 text-white hover:bg-red-600'
                            } transition duration-200`}
                    >
                        Prev
                    </button>

                    {getPageNumbers().map((page) => (
                        <button
                            key={page}
                            onClick={() => {
                                setCurrentPage(page);
                                scrollToTop();
                            }}
                            className={`w-9 h-9 rounded-md flex items-center justify-center border ${page === currentPage
                                ? 'bg-red-500 text-white'
                                : 'bg-white text-gray-700 hover:bg-red-100'
                                } transition duration-200`}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => {
                            setCurrentPage(currentPage + 1);
                            scrollToTop();
                        }}
                        className={`px-4 py-2 rounded-md border ${currentPage === totalPages
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : 'bg-red-500 text-white hover:bg-red-600'
                            } transition duration-200`}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProductCardContainer;
