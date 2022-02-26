import React, { createContext, useState } from "react";
import { ProductType } from "../types";

type ProductCartType = ProductType & {
  quantity: number;
};

type CartType = { [key: string]: ProductCartType };

type CartContextType = {
  cart: CartType;
  addProduct: (product: ProductType, quantity: number) => void;
};

export const CartContext = createContext<CartContextType>({
  cart: {},
  addProduct: (product, quantity) => undefined,
});

export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<CartType>({});

  const addProduct = (product: ProductType, quantity: number) => {
    setCart((cart) => {
      if (cart[product.id]) {
        return {
          ...cart,
          [product.id]: {
            ...product,
            quantity: cart[product.id].quantity + quantity,
          },
        };
      }
      return { ...cart, [product.id]: { ...product, quantity } };
    });
  };

  return (
    <CartContext.Provider value={{ cart, addProduct }}>
      {children}
    </CartContext.Provider>
  );
};
