import React from "react";
import s from "./style.module.scss";
import pizzaLogo from "../../assets/images/pizzaLogo.svg";
import cartIcon2 from "../../assets/images/cartIcon_2.svg";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store";
export const NavPanel = () => {
  const { totalPrice, cart } = useAppSelector((state) => state.cart);
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

      {cart.length !== 0 && (
        <div onClick={() => navigate("./cart")} className={s["cart-button"]}>
          <div className={s["cart-button-totalPrice"]}>
            <div> {totalPrice}</div>
            <div className={s["cart-button-totalPrice-icon"]}> ₽</div>
          </div>
          <img className={s["cart-icon"]} src={cartIcon2} alt="cart-icon" />
        </div>
      )}
    </div>
  );
};
