import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleSelectCategory(e) {
    setSelectedCategory(e.target.value);
  }

  function buildItemList(items) {
    const filteredItems = items.filter(item => item.category === selectedCategory || selectedCategory === "All");
    
    return (
      filteredItems.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      ))
    );
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleSelectCategory} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {
          buildItemList(items)

        }
      </ul>
    </div>
  );
}

export default ShoppingList;
