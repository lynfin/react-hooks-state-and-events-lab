import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  const itemClass = inCart ? "in-cart" : ""
  const cartButtonText = inCart ? "Remove from Cart" : "Add to Cart";

  function handleCartRequest() {  
    setInCart(!inCart);
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartRequest} className="add">{cartButtonText}</button>
    </li>
  );
}

export default Item;
