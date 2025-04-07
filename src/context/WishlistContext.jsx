// src/context/WishlistContext.jsx
import { createContext, useState, useCallback, useMemo } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    const isInWishlist = useCallback(
        (id) => wishlist.some((item) => item.id === id),
        [wishlist]
    );

    const addToWishlist = useCallback((item) => {
        setWishlist((prev) => [...prev, item]);
    }, []);

    const removeFromWishlist = useCallback((id) => {
        setWishlist((prev) => prev.filter((item) => item.id !== id));
    }, []);

    const toggleWishlist = useCallback(
        (item) => {
            setWishlist((prev) =>
                prev.some((i) => i.id === item.id)
                    ? prev.filter((i) => i.id !== item.id)
                    : [...prev, item]
            );
        },
        []
    );

    const value = useMemo(() => ({
        wishlist,
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
    }), [wishlist, isInWishlist, addToWishlist, removeFromWishlist, toggleWishlist]);

    return (
        <WishlistContext.Provider value={value}>
            {children}
        </WishlistContext.Provider>
    );
};

export default WishlistContext;
