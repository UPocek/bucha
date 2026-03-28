import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

import { normalizeCartItem } from '@/lib/catalog';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const getStoredCartItems = () => {
    try {
        const storedCart = localStorage.getItem('cartItems');

        if (!storedCart) {
            return [];
        }

        const parsedCart = JSON.parse(storedCart);

        if (!Array.isArray(parsedCart)) {
            return [];
        }

        return parsedCart.map(normalizeCartItem);
    } catch {
        return [];
    }
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [change, setChange] = useState(false);
    const cartHydratedRef = useRef(false);

    // Hydrate cart from local storage only after mount to avoid SSR/client mismatch.
    useEffect(() => {
        let cancelled = false;

        queueMicrotask(() => {
            if (cancelled) {
                return;
            }

            cartHydratedRef.current = true;
            setCartItems(getStoredCartItems());
        });

        return () => {
            cancelled = true;
        };
    }, []);

    // Save cart to local storage whenever it changes.
    useEffect(() => {
        if (!cartHydratedRef.current) {
            return;
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (newItem) => {
        const normalizedItem = normalizeCartItem(newItem);

        setChange(true);
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.productId === normalizedItem.productId);

            if (existingItem) {
                // Update quantity of the existing item
                return prevItems.map((item) =>
                    item.productId === normalizedItem.productId
                        ? { ...item, quantity: item.quantity + normalizedItem.quantity }
                        : item,
                );
            } else {
                // Add new item to cart
                return [...prevItems, normalizedItem];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.productId !== productId));
    };

    const emptyCart = () => {
        setCartItems([]);
    };

    const updateQuantity = (productId, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) => (item.productId === productId ? { ...item, quantity } : item)),
        );
    };

    const cartItemCount = cartItems.length;

    return (
        <CartContext.Provider
            value={{
                cartItems,
                cartItemCount,
                change,
                setChange,
                addToCart,
                removeFromCart,
                updateQuantity,
                emptyCart,
            }}>
            {children}
        </CartContext.Provider>
    );
};
