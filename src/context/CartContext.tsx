import React, { createContext, useState, ReactNode, useEffect } from 'react';

export type TCartItem = {
  id: number;
  title: string;
  price:number;
  brand:string;
  image:string;
  // Other properties of the cart item
};

export type TCartContext = {
  cartItems: TCartItem[];
  addToCart: (item: TCartItem) => void;
  
};

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<TCartContext | undefined>(undefined);

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<TCartItem[]>([]);
  useEffect(() => {
    // Load cart items from local storage on component mount
    const existingCartItems = localStorage.getItem('cartItems');
    if (existingCartItems) {
      setCartItems(JSON.parse(existingCartItems));
    }
  }, []);
  const addToCart = (item: TCartItem) => {
    setCartItems([...cartItems, item]);
     // Update local storage with the updated cart items
     localStorage.setItem('cartItems', JSON.stringify([...cartItems, item]));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart}}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
