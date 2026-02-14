import React from "react";
import { categories } from "../../Data/data";
import "./Category.css";

function Category({ selected, setSelected }) {
  return (
    <div className="category-container">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className={`category-item ${selected === cat.name ? "active" : "" }`}onClick={() => setSelected(cat.name)}>
          <div className="category-img">
            <img src={cat.image} alt={cat.name} />
          </div>
          <p>{cat.name}</p>
        </div>
      ))}
    </div>
  );
}
export default Category;
