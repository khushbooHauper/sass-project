import React, { createContext, useState, ReactNode, useEffect } from 'react';

export type TCartItem = {
  id: number;
  title: string;
  price:number;
  brand:string;
  image:string;
  quantity:number;
  // Other properties of the cart item
};

export type TCartContext = {
  cartItems: TCartItem[];
  addToCart: (item: TCartItem) => void;
  deleteFromCart: (itemId: number) => void;
  handleAddToCart: (selectedProduct: TCartItem) => void; // <-- Add this line

};

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<TCartContext | undefined>(undefined) as React.Context<TCartContext>;

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
  const deleteFromCart = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    // Update local storage with the updated cart items
    localStorage.setItem(
      'cartItems',
      JSON.stringify(cartItems.filter((item) => item.id !== itemId))
    );
  };
  // const handleAddToCart = (selectedProduct: TCartItem | undefined) => {
  //   const item: TCartItem = {
  //     id: selectedProduct?.id || 0,
  //     title: selectedProduct?.title || '',
  //     price: selectedProduct?.price || 0,
  //     brand: selectedProduct?.brand || '',
  //     image: selectedProduct?.image || '',
  //     // Include other properties of the cart item
  //   };
  
  //   addToCart(item);
  // };
  

  const handleAddToCart = (product: TCartItem) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // If the item already exists in the cart, increment its quantity
      const updatedCartItems = cartItems.map((item) =>
        item.id === existingItem.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      // If the item doesn't exist in the cart, add it
      const newCartItem: TCartItem = {
        id: product.id,
        title: product.title,
        price: product?.price || 0,
        brand: product?.brand || '',
        image: product?.image || '',
        quantity: 1,
      };
      setCartItems([...cartItems, newCartItem]);
    }
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart,deleteFromCart, handleAddToCart}}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
