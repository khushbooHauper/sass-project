import React, { useContext } from "react";

import {
  CartEmpty,
  CartItem,
  Footer,
  Header,
  MainHeader,
  OrderBlock,
} from "../components";
import { CartContext, TCartItem } from "../context/CartContext";
import { CartItemProps } from "../components/CartItem/CartItem";
import CardItemNew from "../components/CardItemNew";

const CartNew: React.FC = () => {
    const cartContext = useContext(CartContext);
    const { cartItems } = cartContext || { cartItems: [] };
  return (
    <>
      <MainHeader />
      {cartItems.length === 0 ? (
        <CartEmpty />
      ) : (
        <>
          <section className="cart">
            <div className="container">
              <div className="cart__title">Your Order</div>
              <div className="cart__orders">
                {cartItems?.map((item) => (
                  <CardItemNew key={item.id} {...item} />
                ))}
              </div>
              <div className="cart__fullsum">
                <span>Cart Total:</span> INR 25,000
              </div>
            </div>
          </section>
        </>
      )}
      <Footer />
    </>
  );
};

export default CartNew;
