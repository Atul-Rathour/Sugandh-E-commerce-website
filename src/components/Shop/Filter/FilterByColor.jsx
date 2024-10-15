import React from "react";
import "../CSS/FilterByColor.css";

export default function FilterByColor() {
  const colors = [
    "Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink", "Black", "White", "Brown", "Cyan", "Magenta", "Gray", "Teal", "Maroon"
  ];

  return (
    <ul class="color-filter">
      {colors.map((color, index) => (
        <li key={index} class="list-item">
          <a href="" class="et-color-swatch" onClick={()=>{localStorage.setItem('sorting',color)}}>
            <span class="et-swatch-circle">
              <span style={{ backgroundColor: color }}></span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
