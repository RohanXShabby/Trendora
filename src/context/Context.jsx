import { createContext, useCallback, useState } from "react";

const AppContext = createContext(0)
export const CartCountContext = createContext();
export const CartItemsContext = createContext();

export const ContextProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    const increment = (product) => {
        if (!product || !product.id) return prev => prev; // Guard clause to prevent errors
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
        setCartCount(prev => prev + 1);
    };

    const itemInCart = useCallback(
        (id) => (id) => cartItems.some((item) => item.id === id), [cartItems]
    )

    const decrement = (product) => {
        if (!product || !product.id) return prev => prev; // Guard clause to prevent errors
        setCartItems(prev =>
            prev.map(p =>
                p.id === product.id
                    ? { ...p, quantity: Math.max(p.quantity - 1, 1) }
                    : p
            )
        );
        setCartCount(prev => (prev > 1 ? prev - 1 : 1));
    };

    return <AppContext.Provider
        value={{
            cartCount,
            increment,
            decrement,
            cartItems,
            setCartItems,
            itemInCart
        }}>
        <CartCountContext.Provider
            value={{
                cartCount,
                increment,
                itemInCart,
                decrement
            }}>
            <CartItemsContext.Provider
                value={{
                    cartItems,
                    setCartItems,
                    itemInCart
                }}>
                {children}
            </CartItemsContext.Provider>
        </CartCountContext.Provider>
    </AppContext.Provider>
}

export default AppContext