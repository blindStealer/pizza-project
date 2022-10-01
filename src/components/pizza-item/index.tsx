import React from "react";
import s from "./style.module.scss";
import { IPizza } from "../../store/slices/pizza-slice";

interface IPizzaitemProps {
  item: IPizza;
}

export const PizzaItem: React.FC<IPizzaitemProps> = ({ item }) => {
  const types = ["тонкое", "традиционное"];

  return (
    <div className={s.wrapper}>
      <img src={item.imageUrl} alt="imageUrl" />
      <div className={s.title}>{item.title}</div>
      <div className={s.options}>
        <div className={s.types}>
          {item.types.map((item: any) => {
            return <div key={item}>{types[item]}</div>;
          })}
        </div>
        <div className={s.sizes}>
          {item.sizes.map((item: any) => {
            return <div key={item}>{item} см.</div>;
          })}
        </div>

        <div className={s["add-button"]}>
          <div className={s["add-button-price"]}>от {item.price} ₽</div>
          <div className={s["add-button-add"]}>Добавить 2 </div>
        </div>
      </div>
    </div>
  );
};
