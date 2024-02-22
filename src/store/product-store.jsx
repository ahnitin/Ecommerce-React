import { createContext } from "react";

const ProductContext = createContext({
  items: [],
  removeItem: () => {},
  addItem: () => {},
  filterItem: () => {},
});

export default ProductContext;
