import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [change, setChange] = useState(false);

    // Load cart from local storage on initial load
    useEffect(() => {
        const storedCart = localStorage.getItem('cartItems');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
        setLoading(false); // Mark loading as false after initial load
    }, []);

    // Save cart to local storage whenever it changes (except on initial load)
    useEffect(() => {
        if (!loading) {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
    }, [cartItems, loading]);

    const addToCart = (newItem) => {
        setChange(true);
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.name === newItem.name);

            if (existingItem) {
                // Update quantity of the existing item
                return prevItems.map((item) =>
                    item.name === newItem.name
                        ? { ...item, quantity: item.quantity + newItem.quantity }
                        : item
                );
            } else {
                // Add new item to cart
                return [...prevItems, newItem];
            }
        });
    };


    const removeFromCart = (productName) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.name !== productName));
    };

    const emptyCart = () => {
        setCartItems([]);
    };

    const updateQuantity = (productName, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.name === productName ? { ...item, quantity } : item
            )
        );
    };

    const cartItemCount = cartItems.length;

    return (
        <CartContext.Provider value={{ cartItems, cartItemCount, change, setChange, addToCart, removeFromCart, updateQuantity, emptyCart }}>
            {children}
        </CartContext.Provider>
    );
};
