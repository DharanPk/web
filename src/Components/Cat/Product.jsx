import React, { useState } from "react";
import Category from "./Category";
import ProductCard from "./ProductCard";
import { foods } from "../../Data/data";

function Products() {
  const [selected, setSelected] = useState("All");

  const filteredFoods =
    selected === "All"
      ? foods
      : foods.filter((food) => food.category === selected);

  return (
    <>
      <Category setSelected={setSelected} />

      {filteredFoods.map((food) => (
        <div key={food.category}>
          <h2>{food.category}</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: "16px",
            }}
          >
            {food.items.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Products;
