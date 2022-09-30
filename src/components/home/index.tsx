import React from "react";
import { Categories } from "../categories";
import { PizzaItems } from "../pizza-items";

export const Home = () => {
  return (
    <div>
      <Categories />
      <PizzaItems />
    </div>
  );
};
