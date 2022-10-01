import React from "react";
import s from "./style.module.scss";
import cartIcon2 from "./../../assets/images/cartIcon_2.svg";
import trash from "./../../assets/images/trash.svg";

import { CartItem } from "../cart-item";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  clearCart,
  removeItem,
  setTotalCount,
  setTotalPrice,
} from "../../store/slices/cart-slice";
export const Cart = () => {
  const dispatch = useAppDispatch();

  const { cart, totalCount, totalPrice } = useAppSelector(
    (state) => state.cart
  );

  const totalC = cart.reduce((acc, item) => {
    return (acc += item.count);
  }, 0);

  const totalP = cart.reduce((acc, item) => {
    return (acc += item.price * item.count);
  }, 0);

  React.useEffect(() => {
    dispatch(setTotalCount(totalC));
    dispatch(setTotalPrice(totalP));
  }, [cart, totalC, totalP]);

  const navigate = useNavigate();

  const clearCartHandler = () => {
    if (window.confirm("Подтверждение очистки корзины")) {
      dispatch(clearCart());
    }
  };

  const removeItemHandler = (id: number) => {
    dispatch(removeItem(id));
  };

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
            <div onClick={clearCartHandler}>Очистить корзину</div>
          </div>
        </div>
        <div>
          {cart.map((item) => {
            return <CartItem {...item} removeItemHandler={removeItemHandler} />;
          })}
        </div>

        <div className={s.total}>
          <div>
            Всего пицц: <span>{totalCount} шт.</span>
          </div>
          <div>Сумма заказа: {totalPrice} ₽</div>
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
