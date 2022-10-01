import React from "react";
import s from "./style.module.scss";
import close2 from "./../../assets/images/close_2.svg";
import plus from "./../../assets/images/plus.svg";
import minus_2 from "./../../assets/images/minus_2.svg";
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
        <img src={minus_2} alt="plus" width={20} />
        <img src={plus} alt="minus" width={30} />
        <div>{count}</div>
      </div>

      <div className={s.price}>{price} ₽ </div>

      <img
        onClick={() => removeItemHandler(id)}
        src={close2}
        alt="close2"
        width={25}
      />
    </div>
  );
};
