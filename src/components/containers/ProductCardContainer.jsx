import { useNavigate } from "react-router-dom";
import ProductCard from "../cards/ProductCard";

const ProductCardContainer = ({
    products = [],
    columns = "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
}) => {
    const navigate = useNavigate();

    const handleProductClick = (product) => {
        navigate(`/products/${product.id}`);
    };
    if (!products.length) {
        return (
            <div className="w-full flex justify-center items-center py-10">
                <span className="text-gray-400">No products found.</span>
            </div>
        );
    }

    return (
        <div className={`grid ${columns} gap-6`}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} onCardClick={handleProductClick} />
            ))}
        </div>
    );
};

export default ProductCardContainer;

