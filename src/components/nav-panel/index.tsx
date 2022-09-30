import React from "react";
import s from "./style.module.scss";
import pizzaLogo from "../../assets/images/pizzaLogo.svg";
import cartIcon2 from "../../assets/images/cartIcon_2.svg";
import { useNavigate } from "react-router-dom";
export const NavPanel = () => {
  const navigate = useNavigate();

  return (
    <div className={s.wrapper}>
      <div onClick={() => navigate("./home")} className={s["logo-wrapper"]}>
        <img width={40} src={pizzaLogo} alt="pizzaLogo" />
        <div className={s["title-wrapper"]}>
          <div className={s.name}>REACT PIZZA</div>
          <div className={s.content}>самая вкусная пицца во вселенной</div>
        </div>
      </div>

      <div onClick={() => navigate("./cart")} className={s["cart-button"]}>
        <span>520 ₽</span>
        <div>|</div>
        <img className={s["cart-icon"]} src={cartIcon2} alt="cart-icon" />
      </div>
    </div>
  );
};
