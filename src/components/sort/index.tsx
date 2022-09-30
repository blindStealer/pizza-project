import React from "react";
import s from "./style.module.scss";
import vector from "../../assets/images/vector.svg";
export const Sort = () => {
  const sort = ["популярности", "по цене", "по алфавиту"];

  return (
    <div className={s.sort}>
      <div className={s["sort-title"]}>
        <img src={vector} alt="" />
        Сортировка по: <span>популярности</span>
      </div>
      <div className={s["sort-items"]}>
        {sort.map((item, idx) => {
          return <div key={idx}>{item}</div>;
        })}
      </div>
    </div>
  );
};
