import React, { useState } from "react";
import s from "./style.module.scss";
import { IPizza } from "../../store/slices/pizza-slice";
import { ICartItem, setItemsInCart } from "../../store/slices/cart-slice";
import { useAppDispatch } from "../../store";

interface IPizzaitemProps {
  item: IPizza;
}

export const PizzaItem: React.FC<IPizzaitemProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const [itemType, setItemType] = useState<number>(0);
  const [itemSize, setItemSize] = useState<number>(0);

  const types = ["тонкое", "традиционное"];

  const clickHandler = () => {
    const itemInCart: ICartItem = {
      id: item.id,
      imageUrl: item.imageUrl,
      title: item.title,
      type: types[itemType],
      size: itemSize,
      price: item.price,
      count: 1,
    };

    dispatch(setItemsInCart(itemInCart));
  };

  return (
    <div className={s.wrapper}>
      <img src={item.imageUrl} alt="imageUrl" />
      <div className={s.title}>{item.title}</div>
      <div className={s.options}>
        <div className={s.types}>
          {item.types.map((item: any) => {
            return (
              <div onClick={() => setItemType(item)} key={item}>
                {types[item]}
              </div>
            );
          })}
        </div>
        <div className={s.sizes}>
          {item.sizes.map((item: any) => {
            return (
              <div onClick={() => setItemSize(item)} key={item}>
                {item} см.
              </div>
            );
          })}
        </div>

        <div className={s["add-button"]}>
          <div className={s["add-button-price"]}>от {item.price} ₽</div>

          <div onClick={clickHandler} className={s["add-button-add"]}>
            Добавить 2{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
