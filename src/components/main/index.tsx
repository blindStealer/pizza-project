import React from "react";
import s from "./style.module.scss";

import { Routes, Route } from "react-router-dom";
import { NavPanel } from "../nav-panel";
import { Cart } from "../cart";
import { Home } from "../home";
import { EmptyCart } from "../empty-cart";
import { useAppDispatch, useAppSelector } from "../../store";
import { setTotalCount, setTotalPrice } from "../../store/slices/cart-slice";
const Main = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);

  const totalC = cart.reduce((acc, item) => {
    return (acc += item.count);
  }, 0);

  const totalP = cart.reduce((acc, item) => {
    return (acc += item.price * item.count);
  }, 0);

  React.useEffect(() => {
    dispatch(setTotalCount(totalC));
    dispatch(setTotalPrice(totalP));
  }, [totalC, totalP]);
  return (
    <div className={s.wrapper}>
      <NavPanel />
      <Routes>
        <Route path={"/home"} element={<Home />} />
        <Route path={"/*"} element={<Home />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/empty"} element={<EmptyCart />} />
      </Routes>
    </div>
  );
};

export default Main;
