import { createContext, useCallback, useState, useEffect } from "react";

const AppContext = createContext(0)
export const CartCountContext = createContext();
export const CartItemsContext = createContext();

export const ContextProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState(() => {
        const stored = localStorage.getItem("cart");
        return stored ? JSON.parse(stored) : [];
    });

    // Update cart count whenever cartItems changes
    useEffect(() => {
        const newCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        setCartCount(newCount);
    }, [cartItems]);

    // Save cart items to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        if (!product || !product.id) return;
        setCartItems(prev => {
            const found = prev.find(p => p.id === product.id);
            if (found) {
                return prev.map(p =>
                    p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    };

    const increment = (product) => {
        addToCart(product);
    };

    const decrement = (product) => {
        if (!product || !product.id) return;
        setCartItems(prev => {
            const item = prev.find(p => p.id === product.id);
            if (!item) return prev;

            if (item.quantity === 1) {
                return prev.filter(p => p.id !== product.id);
            }

            return prev.map(p =>
                p.id === product.id
                    ? { ...p, quantity: p.quantity - 1 }
                    : p
            );
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prev => prev.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartItemsContext.Provider
            value={{
                cartItems,
                setCartItems,
                addToCart,
                increment,
                decrement,
                removeFromCart,
                clearCart
            }}>
            <CartCountContext.Provider
                value={{
                    cartCount,
                }}>
                {children}
            </CartCountContext.Provider>
        </CartItemsContext.Provider>
    );
}

export default AppContext;