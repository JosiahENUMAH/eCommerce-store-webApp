import React, { createContext, useState } from "react";

// create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={"this is the cart context"}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
