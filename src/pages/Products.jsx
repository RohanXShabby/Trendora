import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import ProductCardContainer from "../components/containers/ProductCardContainer";

const Products = () => {
    const products = useLoaderData(); // data from getProduct
    const [category, setCategory] = useState("all");
    const [sort, setSort] = useState("default");
    const [showSale, setShowSale] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const productsPerPage = 8;

    // Filtering
    let filtered = [...products];
    if (category !== "all") {
        filtered = filtered.filter((p) => p.category === category);
    }
    if (showSale) {
        filtered = filtered.filter((p) => p.onSale === true);
    }

    // Sorting
    if (sort === "low-high") {
        filtered.sort((a, b) => a.price - b.price);
    }
    if (sort === "high-low") {
        filtered.sort((a, b) => b.price - a.price);
    }

    // Pagination
    const start = (currentPage - 1) * productsPerPage;
    const paginated = filtered.slice(start, start + productsPerPage);
    const totalPages = Math.ceil(filtered.length / productsPerPage);

    return (
        <section className="px-6 md:px-16 py-10">
            {/* Filters */}
            <div className="flex flex-wrap gap-4 justify-between items-center mb-8">
                <div className="flex gap-4">
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="px-3 py-2 border rounded-md"
                    >
                        <option value="all" className="text-balance text-black">All Categories</option>
                        {[...new Set(products.map((p) => p.category))].map((c) => (
                            <option className="text-black" key={c} value={c}>{c}</option>
                        ))}
                    </select>

                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={showSale}
                            onChange={(e) => setShowSale(e.target.checked)}
                        />
                        On Sale
                    </label>
                </div>

                <div>
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="px-3 py-2 border rounded-md "
                    >
                        <option className="text-black" value="default">Sort by</option>
                        <option className="text-black" value="low-high">Price: Low to High</option>
                        <option className="text-black" value="high-low">Price: High to Low</option>
                    </select>
                </div>
            </div>

            {/* Product Grid */}
            <ProductCardContainer products={paginated} />

            {/* Pagination */}
            <div className="flex justify-center mt-10 gap-2 items-center">
                {/* Prev Button */}
                <button
                    onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-2 rounded-lg border transition-all duration-200 
      ${currentPage === 1
                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                            : "bg-white hover:bg-red-100 text-gray-700 border-gray-300"
                        }`}
                >
                    ⬅ Prev
                </button>

                {/* Page Numbers (only 5 at a time) */}
                {[...Array(totalPages)].map((_, i) => i + 1)
                    .filter(page =>
                        page >= currentPage - 2 && page <= currentPage + 2
                    )
                    .map(page => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium transition-all duration-200 
          ${currentPage === page
                                    ? "bg-red-200 text-white shadow-md scale-105"
                                    : "bg-white text-gray-700 border border-gray-300 hover:bg-red-100"
                                }`}
                        >
                            {page}
                        </button>
                    ))}

                {/* Next Button */}
                <button
                    onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-2 rounded-lg border transition-all duration-200 
      ${currentPage === totalPages
                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                            : "bg-white hover:bg-red-100 text-gray-700 border-gray-300"
                        }`}
                >
                    Next ➡
                </button>
            </div>


        </section>
    );
};

export default Products;
