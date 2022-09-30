import React from "react";
import s from "./style.module.scss";
import cartIcon2 from "./../../assets/images/cartIcon_2.svg";
import trash from "./../../assets/images/trash.svg";

import { CartItem } from "../cart-item";
import { useNavigate } from "react-router-dom";
export const Cart = () => {
  const navigate = useNavigate();

  const arrayTestCart = [
    {
      id: 0,
      imageUrl:
        "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
      title: "Пепперони Фреш с перцем",
      types: [0, 1],
      sizes: [26, 30, 40],
      price: 803,
      category: 0,
      rating: 4,
    },
    {
      id: 1,
      imageUrl:
        "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
      title: "Сырная",
      types: [0],
      sizes: [26, 40],
      price: 245,
      category: 0,
      rating: 6,
    },
    {
      id: 2,
      imageUrl:
        "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
      title: "Цыпленок барбекю",
      types: [0],
      sizes: [26, 40],
      price: 295,
      category: 1,
      rating: 4,
    },
    {
      id: 3,
      imageUrl:
        "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg",
      title: "Кисло-сладкий цыпленок",
      types: [1],
      sizes: [26, 30, 40],
      price: 275,
      category: 2,
      rating: 2,
    },
  ];

  return (
    <div className={s.wrapper}>
      <div className={s.cart}>
        <div className={s["cart-title-wrapper"]}>
          <div className={s["cart-title"]}>
            <img src={cartIcon2} alt="cartIcon2" width={50} />
            <div>Ваша наполненная корзина</div>
          </div>
          <div className={s["delete-trash"]}>
            <img src={trash} alt="trash" width={25} />
            <div>Очистить корзину</div>
          </div>
        </div>
        <div>
          {arrayTestCart.map((item) => {
            return <CartItem {...item} />;
          })}
        </div>

        <div className={s.total}>
          <div>
            Всего пицц: <span>3 шт.</span>
          </div>
          <div>Сумма заказа: 900 ₽</div>
        </div>

        <div className={s["nav-buttons"]}>
          <div onClick={() => navigate("/home")} className={s["button-back"]}>
            Вернуться назад
          </div>
          <div className={s["button-pay"]}>Оплатить сейчас</div>
        </div>
      </div>
    </div>
  );
};
