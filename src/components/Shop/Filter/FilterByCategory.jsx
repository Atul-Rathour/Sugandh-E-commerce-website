import React from "react";
import "../CSS/FilterByCategory.css";

export default function FilterByCategory() {
  const categories = [
    "Anarkali Set",
    "Co-Ords",
    "Co-Ords Set",
    "Dresses",
    "Dresses & Maxi",
    "Gowns",
    "Jacket",
    "Jacket set",
    "Kaftan",
    "Kaftans",
    "Kurta",
    "Kurta Set",
    "Lehenga",
    "Sarees",
    "Top",
    "Tunix",
  ];
  return (
    <div>
      <ul class="category-filter">
        {categories.map((category, index) => (
          <li key={index} class="list-item">
            <a href="#">
              <span class="name">{category}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
