import React, { useState } from "react";
import Category from "./Category";
import ProductCard from "./ProductCard";
import { foods } from "../../Data/data";
import "./Product.css";   // 👈 make sure this is imported

function Products() {
  const [selected, setSelected] = useState("All");

  const filteredFoods =
    selected === "All"
      ? foods
      : foods.filter((food) => food.category === selected);

  return (
    <>
      <Category selected={selected} setSelected={setSelected} />

      {filteredFoods.map((food) => (
        <div key={food.category}>
          <h2 className="category-title">{food.category}</h2>

          <div className="product-grid">
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
