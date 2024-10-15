import React from "react";

export default function sort() {
  const options = [
    {
      value: "SortFilter",
      name: "Sort By",
    },
    {
      value: "lowest",
      name: "Price (lowest)",
    },
    {
      value: "highest",
      name: "Price (highest)",
    },
    {
      value: "a-z",
      name: "Name (a-z)",
    },
    {
      value: "z-a",
      name: "Name (z-a)",
    },
  ];
  return (
    <div class="sort-selection">
      <form action="#">
        <label for="sort"></label>
        <select
          name="sort"
          id="sort"
          className="sort-selection--style"
          style={{
            backgroundColor: "#fff",
            border: "2px solid black",
            padding: "5px",
            borderRadius: "7px",
          }}
        >
          {options.map((item, index) => {
            return (
              <option key={index} value={item.value}>
                {item.name}
              </option>
            );
          })}{" "}
        </select>
      </form>
    </div>
  );
}
