import React from "react";
import s from "./style.module.scss";
import close2 from "./../../assets/images/close_2.svg";
import plus from "./../../assets/images/plus.svg";
import minus_2 from "./../../assets/images/minus_2.svg";
export const CartItem = ({ imageUrl }: any) => {
  return (
    <div className={s["cart-item"]}>
      <div className={s.title}>
        <img src={imageUrl} width={110} alt="imageUrl" />
        <div>
          <div>Сырный Цыплёнок</div>
          <div>тонкое тесто, 26 см.</div>
        </div>
      </div>
      <div className={s.quantity}>
        <img src={minus_2} alt="plus" width={20} />
        <img src={plus} alt="minus" width={30} />
        <div>2</div>
      </div>

      <div className={s.price}>770 ₽ </div>

      <img src={close2} alt="close2" width={25} />
    </div>
  );
};
