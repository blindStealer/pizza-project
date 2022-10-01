import React, { useState } from "react";
import s from "./style.module.scss";
import { useAppDispatch, useAppSelector } from "../../store";
import { setSelectCategory } from "../../store/slices/filter-slice";

interface CategoryItemProps {
  item: string;
  idx: number;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({ item, idx }) => {
  const dispatch = useAppDispatch();
  const { selectCategory } = useAppSelector((state) => state.filter);

  return (
    <div
      onClick={() => dispatch(setSelectCategory(idx))}
      className={
        selectCategory === idx ? ` ${s["wrapper-active"]} ` : `${s.wrapper}`
      }
    >
      {item}
    </div>
  );
};
