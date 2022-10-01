import React from "react";
import s from "./style.module.scss";
import { CategoryItem } from "../category-item";
import { Sort } from "../sort";
export const Categories = () => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className={s.wrapper}>
      <div className={s.categories}>
        {categories.map((item, idx) => {
          return <CategoryItem item={item} idx={idx} key={idx} />;
        })}
      </div>

      <Sort />
    </div>
  );
};
