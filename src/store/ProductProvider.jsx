import ProductContext from "./product-store";
import items from "../components/Products/Data";
import { useReducer } from "react";
const productReducer = (currItems, action) => {
  if (action.type === "Filter_ITEMS") {
    if (action.value.length === 0) {
      return items;
    }
    const filterArray = currItems.filter((item) => {
      return item.title.toLowerCase().includes(action.value.toLowerCase());
    });
    return filterArray;
  }
  return currItems;
};
const ProductProvider = (props) => {
  const [state, dispatchstate] = useReducer(productReducer, items);
  const addItem = () => {};
  const removeItem = () => {};
  const filterItem = (value) => {
    dispatchstate({
      type: "Filter_ITEMS",
      value: value,
    });
  };
  return (
    <ProductContext.Provider
      value={{
        items: state,
        addItem,
        removeItem,
        filterItem,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
