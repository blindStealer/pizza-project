import React from "react";
import s from "./style.module.scss";
import sad from "../../assets/images/sadSmile.svg";
import { useNavigate } from "react-router-dom";
export const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className={s.wrapper}>
      <h2>Корзина пустая</h2>
      <img src={sad} alt="" width={250} />
      <p>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </p>

      <div onClick={() => navigate("home")} className={s["button-back"]}>
        Вернуться назад
      </div>
    </div>
  );
};
