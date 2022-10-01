import React, { useState } from "react";
import s from "./style.module.scss";
import vector from "../../assets/images/vector.svg";
import UpArrow from "./../../assets/images/upArrow.svg";
import downArrow from "./../../assets/images/downArrow.svg";
import { useAppDispatch, useAppSelector } from "../../store";
import { setSort } from "../../store/slices/filter-slice";

interface ISortProps {
  showModal: () => void;
  showSortModal: boolean;
}

export const Sort: React.FC<ISortProps> = ({ showSortModal, showModal }) => {
  const { sort } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  const sortProp = [
    {
      sortName: "популярности",
      sortProperty: "rating",
    },
    {
      sortName: "по цене",
      sortProperty: "price",
    },
    {
      sortName: "по алфавиту",
      sortProperty: "title",
    },
  ];

  // item.SortProperty === sort.SortProperty ? s['sort-item'] : s['sort-item-active']

  return (
    <div onClick={() => showModal()} className={s.sort}>
      <div className={s["sort-title"]}>
        <img
          src={showSortModal ? downArrow : UpArrow}
          alt="UpArrow"
          width={20}
        />
        Сортировка по: <span>{sort.sortName}</span>
      </div>

      {showSortModal && (
        <div className={s["sort-items"]}>
          {sortProp.map((item, idx) => {
            return (
              <div
                className={
                  item.sortProperty === sort.sortProperty
                    ? s["sort-item-active"]
                    : s["sort-item"]
                }
                onClick={() => dispatch(setSort(item))}
                key={idx}
              >
                {item.sortName}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
