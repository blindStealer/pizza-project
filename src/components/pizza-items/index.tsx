import React, { useEffect } from "react";
import s from "./style.module.scss";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchPizzas } from "../../store/slices/pizza-slice";
import { PizzaItem } from "../pizza-item";

export const PizzaItems = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((state) => state.pizza);
  const { selectCategory, sort } = useAppSelector((state) => state.filter);

  console.log("sort", sort);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchPizzas({ selectCategory, sort }));
  }, [selectCategory, sort]);

  return (
    <div className={s.wrapper}>
      <div className={s.items}>
        {items.map((item, idx) => {
          return <PizzaItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};
