import React, { useEffect } from "react";
import s from "./style.module.scss";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchPizzas } from "../../store/slices/pizza-slice";
import { PizzaItem } from "../pizza-item";
import { PizzaSkeleton } from "../pizza-item/Skeleton";

export const PizzaItems = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((state) => state.pizza);
  const { selectCategory, sort } = useAppSelector((state) => state.filter);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchPizzas({ selectCategory, sort }));
  }, [selectCategory, sort]);

  return (
    <div className={s.wrapper}>
      <div className={s.items}>
        {status === "pending"
          ? [...Array(8)].map((_, idx) => <PizzaSkeleton key={idx} />)
          : items.map((item, idx) => {
              return <PizzaItem item={item} key={item.id} />;
            })}
      </div>
    </div>
  );
};
