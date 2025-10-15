
import { useContext } from "react";
import { CartItemsContext } from "../../context/Context";
import WishlistContext from "../../context/WishlistContext";
import { Heart, ShoppingCart, Check } from "lucide-react";

const ProductCard = ({ product }) => {
    const { addToCart, isInCart } = useContext(CartItemsContext);
    const { isInWishlist, toggleWishlist } = useContext(WishlistContext);

    if (!product) return null; // safety check

    const alreadyInCart = isInCart(product.id);

    return (
        <div className="group relative border border-gray-50/20 rounded-xl p-3 shadow-sm hover:shadow-lg transition">
            {/* Product Image */}
            <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain w-3/4 h-3/4 group-hover:scale-105 transition"
                />
            </div>

            {/* Wishlist Button */}
            <button
                className={`absolute top-3 right-3 p-2 rounded-full shadow-md transition ${isInWishlist(product.id) ? " text-white" : "bg-white text-gray-600"
                    }`}
                onClick={() => toggleWishlist(product)}
            >
                <Heart
                    className={`w-5 h-5 ${isInWishlist(product.id) ? "fill-red-200 stroke-red-200" : ""}`}
                />
            </button>

            {/* Product Info */}
            <div className="mt-3 flex flex-col gap-1">
                <h3 className="text-sm font-medium line-clamp-2">
                    {product.title}
                </h3>
                <p className="text-red-200 font-semibold">₹{product.price}</p>
            </div>

            {/* Cart Button */}
            <button
                onClick={() => addToCart(product)}
                disabled={alreadyInCart}
                className={`mt-2 w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm transition ${alreadyInCart ? 'bg-gray-600 text-white cursor-not-allowed' : 'bg-red-200 hover:bg-red-100 text-white'}`}
            >
                {alreadyInCart ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
                {alreadyInCart ? 'Added to Cart' : 'Add to Cart'}
            </button>
        </div>
    );
};

export default ProductCard;
