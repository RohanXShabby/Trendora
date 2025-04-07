import { createContext, useState } from "react";

const AppContext = createContext(0)

export const ContextProvider = ({ children }) => {

    const [cart, setCart] = useState(0)

    const increment = () => setCart((prev) => prev + 1);
    const decrement = () => setCart((prev) => (prev > 1 ? prev - 1 : 1));

    return <AppContext.Provider value={{ increment, decrement, cart, setCart }}>{children}</AppContext.Provider>
}

export default AppContext