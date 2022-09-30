import React from "react";
import s from "./style.module.scss";

import { Routes, Route } from "react-router-dom";
import { NavPanel } from "../nav-panel";
import { Cart } from "../cart";
import { Home } from "../home";
import { EmptyCart } from "../empty-cart";
const Main = () => {
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
