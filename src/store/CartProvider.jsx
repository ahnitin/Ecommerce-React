import { useReducer } from "react";
import CartContext from "./cart-context";
const itemsReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    let checkExistingIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    let existingItem = state.items[checkExistingIndex];
    console.log(existingItem, "item");
    let updatedItems;
    if (existingItem) {
      // If item exists, update the quantity and total amount
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + action.payload.quantity,
      };
      updatedItems = [...state.items];
      updatedItems[checkExistingIndex] = updatedItem;
    } else {
      updatedItems = [...state.items, action.payload];
    }
    let newTotalAmount =
      state.total + action.payload.quantity * action.payload.price;
    console.log(updatedItems, newTotalAmount);
    return {
      ...state,
      items: updatedItems,
      total: newTotalAmount,
    };
  }
  if (action.type === "DELETE_ITEM") {
    let updatedItems;
    let Index = state.items.findIndex((item) => item.id === action.payload.id);
    console.log(Index);
    let existingItem = state.items[Index];
    console.log(existingItem);
    if (existingItem.quantity > 1) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems = [...state.items];
      updatedItems[Index] = updatedItem;
    } else {
      updatedItems = state.items.filter((item) => {
        return item.id !== existingItem.id;
      });
    }
    let newTotalAmount = state.total - action.payload.price;
    return {
      ...state,
      items: updatedItems,
      total: newTotalAmount,
    };
  }
  return state;
};
const DEFAULT_STATE = {
  items: [],
  total: 0,
};
const CartProvider = (props) => {
  const [state, dispatchstate] = useReducer(itemsReducer, DEFAULT_STATE);
  const addItemtoCartHandler = (item) => {
    let pr = Number.parseInt(item.price);
    console.log(item);
    dispatchstate({
      type: "ADD_ITEM",
      payload: {
        id: item.id,
        title: item.title,
        price: pr,
        quantity: 1,
        photo: item.imgSrc,
      },
    });
  };
  const removeItemFromCartHandler = (item) => {
    console.log(item, "itemhai ye");
    let pr = Number.parseInt(item.price);
    let qn = Number.parseInt(item.quantity);
    dispatchstate({
      type: "DELETE_ITEM",
      payload: {
        id: item.id,
        title: item.title,
        price: pr,
        quantity: qn,
        photo: item.imgSrc,
      },
    });
  };
  const cartContext = {
    cart: state,
    addItem: addItemtoCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
