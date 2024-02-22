import { createContext } from "react";

const CartContext = createContext({
  cart: {
    items: [],
    total: 0,
  },
  addItem: () => {},
  removeItem: () => {},
});

export default CartContext;
