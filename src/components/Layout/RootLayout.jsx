import { Outlet } from "react-router-dom";
import Header from "./Header";
import Cart from "../Cart/Cart";
import { useState } from "react";

const RootLayout = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <>
      <Header onClickCart={showCartHandler} />
      {cartIsShown && <Cart onHideCart={hideCartHandler}></Cart>}
      <Outlet />
    </>
  );
};
export default RootLayout;
