import React, { useState } from "react";
import "../CSS/Filter.css";
import FilterByCategory from "./FilterByCategory";
import FilterByColor from "./FilterByColor";
import FilterBySize from "./FilterBySize";
import FilterByCollection from "./FilterByCollection";

const sample = [
  {
    product_id: 1,
    name: "Blue T-Shirt",
    price: 1999,
    category: "T-Shirts",
    size: "L",
    colour: "Blue",
    fabric: "Cotton",
    image:
      "http://127.0.0.1:8000/media/products/Aqua_blue_single_rose_kaftan.jpg",
    description: "A comfortable blue t-shirt made of high-quality cotton.",
    appliedColor : "rgb(245, 245, 220)"
  },
];

export default function Filter() {
  const [activeIndex, setActiveIndex] = useState(null);

  const filters = [
    {
      title: "Filter by Category",
      component: <FilterByCategory />,
    },
    {
      title: "Filter by Color",
      component: <FilterByColor  />,
    },
    {
      title: "Filter by Size",
      component: <FilterBySize />,
    },
    {
      title: "Filter by Collection",
      component: <FilterByCollection />,
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div
      className="sec-1"
      style={
        {
          // position: 'fixed'
        }
      }
    >
      <div className="n_container">
        <div className="accordion">
          <dl>
            {filters.map((filter, index) => (
              <div key={index}>
                <dt>
                  <a
                    className={`accordionTitle ${
                      activeIndex === index ? "accordionTitleActive" : ""
                    }`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleToggle(index);
                    }}
                  >
                    {filter.title}
                  </a>
                </dt>
                <dd
                  className={`accordionItem ${
                    activeIndex === index
                      ? "accordionItemExpanded"
                      : "accordionItemCollapsed"
                  }`}
                >
                  {filter.component}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
