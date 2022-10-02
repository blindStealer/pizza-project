import React from "react";
import s from "./style.module.scss";
import close2 from "./../../assets/images/close_2.svg";
import plus from "./../../assets/images/plus.svg";
import minus from "./../../assets/images/minus_2.svg";
import { useAppDispatch } from "../../store";
import { minusItem, plusItem } from "../../store/slices/cart-slice";
export const CartItem = ({
  imageUrl,
  title,
  size,
  type,
  price,
  count,
  id,
  removeItemHandler,
}: any) => {
  const dispatch = useAppDispatch();

  return (
    <div className={s["cart-item"]}>
      <div className={s.title}>
        <img src={imageUrl} width={110} alt="imageUrl" />
        <div>
          <div>{title}</div>
          <div>
            {type} тесто, {size} см.
          </div>
        </div>
      </div>
      <div className={s.quantity}>
        <img
          onClick={() => dispatch(minusItem({ id }))}
          src={minus}
          alt="minus"
          width={25}
        />
        <img
          onClick={() => dispatch(plusItem({ id }))}
          src={plus}
          alt="plus"
          width={35}
        />
        <div>{count}</div>
      </div>

      <div className={s.price}>{price} ₽ </div>

      <img
        className={s.close}
        onClick={() => removeItemHandler(id)}
        src={close2}
        alt="close2"
        width={25}
      />
    </div>
  );
};
